import express from "express";
import {
  getProducts,
  getProductByID,
  createProduct,
  deleteProduct,
  updateProduct,
  addImage,
  getProductByGatogary
} from "../controllers/productGategorys.js";
import store from '../middleware/multer.js'
const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.post('/:id/addImage' ,  store.single('img') , addImage)

router.get("/:id", getProductByID);

router.get("/products/:name", getProductByGatogary);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
