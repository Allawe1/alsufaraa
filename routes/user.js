import express from "express";

import {
  getUserByID,
  getUserOrders,
  getUsers,
  deleteUser,
  updateUser,
  createUser,
  createUserOrder,
  loginUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

router.get("/:id", getUserByID);

router.get("/:id/order", getUserOrders);

router.post("/:id/order", createUserOrder);

router.post("/login", loginUser);

export default router;
