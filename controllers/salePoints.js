import salePoints from "../models/salePoints.js";

export const getSalePoints = async (req, res) => {
  try {
    const salePoint = await salePoints.find();
    console.log(salePoint);
    res.status(200).json(salePoint);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getSalePointByID = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const salePoint = await salePoints.findByID(_id);

    res.status(200).json(salePoint);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createSalePoint = async (req, res) => {
  const salePoint = req.body;
  const newSalePoint = new salePoints(salePoint);

  try {
    await newSalePoint.save();
    res.status(201).json(newSalePoint);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const updateSalePoint = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const updatedSalePoint = await salePoints.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.json(updatedSalePoint);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const deleteSalePoint = async (req, res) => {
  const { id: _id } = req.params;

  try {
    await salePoints.findByIdAndRemove(_id);
    res.json({ message: "sale point deleted" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
