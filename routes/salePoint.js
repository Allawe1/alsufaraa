import express from "express";
import {
  getSalePointByID,
  getSalePoints,
  updateSalePoint,
  deleteSalePoint,
  createSalePoint,
} from "../controllers/salePoints.js";
const router = express.Router();

router.get("/", getSalePoints);

router.post("/", createSalePoint);

router.get("/:id", getSalePointByID);

router.put("/:id", updateSalePoint);

router.delete("/:id", deleteSalePoint);

export default router;
