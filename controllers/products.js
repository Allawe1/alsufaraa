import product from "../models/products.js";
import productGategorys from "../models/productGategorys.js";
export const getProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getProductByID = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const products = await product.findById(_id);

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getProductImage = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const products = await product.findById(_id);

    res.status(200).json(products.img);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createProduct = async (req, res) => {
  const products = req.body;
  console.log(products);
  const newProduct = new product(products);
  const productGategory = await productGategorys.findOne({
    name: products.productGategory,
  });

  newProduct.productGategory = productGategory;

  try {
    await newProduct.save();
    productGategory.product.push(newProduct);
    await productGategory.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const addImage = async (req, res) => {
  const { id: _id } = req.params;
  const products = await product.findById(_id);
  products.img = req.file.filename;

  try {
    const updatedProduct = await product.findByIdAndUpdate(_id, products, {
      new: true,
    });
    console.log(updatedProduct.img);
    res.json(updatedProduct);
  } catch (error) {
    res.status(409).json({ errors });
  }
};
export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const updatedProduct = await product.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const deleteProduct = async (req, res) => {
  const { id: _id } = req.params;

  try {
    await product.findByIdAndRemove(_id);
    res.json({ message: "product deleted" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
