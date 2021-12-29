import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrderByID,
  getOrders,
  updateOrder,
} from "../controllers/order.js";

const router = express.Router();

router.get("/", getOrders);

router.post("/", createOrder);

router.get("/:id", getOrderByID);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

export default router;
