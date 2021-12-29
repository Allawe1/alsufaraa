import orders from "../models/orders.js";

export const getOrders = async (req, res) => {
  try {
    const Orders = await orders.find();

    res.status(200).json(Orders);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getOrderByID = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const Orders = await orders.findById(_id);

    res.status(200).json(Orders);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createOrder = async (req, res) => {
  const Orders = req.body;
  console.log(Orders);
  const newOrder = new orders(Orders);

  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const updateOrder = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const updatedOrder = await orders.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const deleteOrder = async (req, res) => {
  const { id: _id } = req.params;

  try {
    await orders.findByIdAndRemove(_id);
    res.json({ message: "Order deleted" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
