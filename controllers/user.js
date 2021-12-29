import User from "../models/users.js";
import jwt from "jsonwebtoken";
import orders from "../models/orders.js";
import dotenv from "dotenv";
dotenv.config();
const maxAge = 4233600;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: maxAge,
  });
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getUserByID = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const users = await User.findById(_id).populate("order");

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.set("tooken", token);
    res.status(200).json({ user: user, token: token });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    const token = createToken(user._id);
    res.set("tooken", token);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createUserOrder = async (req, res) => {
  const order = req.body;
  const newOrder = new Order(order);
  const { id: _id } = req.params;
  const user = await User.findById(_id);

  newOrder.orderBy = user;
  try {
    await newOrder.save();
    user.order.push(newOrder);
    await user.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const deleteUser = async (req, res) => {
  const { id: _id } = req.params;

  try {
    await User.findByIdAndRemove(_id);

    res.json({ message: "user deleted" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getUserOrders = async (req, res) => {
  const { id: _id } = req.params;
  const foundUser = await User.findById({ _id }).populate("order");

  res.json(foundUser.order);
};
