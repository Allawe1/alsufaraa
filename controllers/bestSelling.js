import bestSellings from '../models/bestSellings.js'
export const getProducts = async (req, res) => {
  try {
    const products = await bestSellings.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getProductByID = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const products = await bestSellings.findById(_id);

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getProductImage = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const products = await bestSellings.findById(_id);

    res.status(200).json(products.img);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createProduct = async (req, res) => {
  const products = req.body;
  console.log(products);
  const newProduct = new bestSellings(products);
  

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const addImage = async (req, res) => {
  const { id: _id } = req.params;
  const products = await bestSellings.findById(_id);
  products.img = req.file.filename;

  try {
    const updatedProduct = await bestSellings.findByIdAndUpdate(_id, products, {
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
    const updatedProduct = await bestSellings.findByIdAndUpdate(_id, req.body, {
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
    await bestSellings.findByIdAndRemove(_id);
    res.json({ message: "product deleted" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
