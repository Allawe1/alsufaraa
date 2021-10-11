import express from "express";
import {
  getProducts,
  getProductByID,
  createProduct,
  deleteProduct,
  updateProduct,
  addImage,
  getProductImage,
} from "../controllers/bestSelling.js";
import store from '../middleware/multer.js'
const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.post('/:id/addImage' ,  store.single('img') , addImage)

router.get("/:id", getProductByID);

router.get("/:id/getImage", getProductImage);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
