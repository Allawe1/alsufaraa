import mongoose from "mongoose";

const Schema = mongoose.Schema;
const productSchema = new Schema({
  productGategory: {
    type: Schema.Types.ObjectId,
    ref: "productGategorys",
    required: true,
  },
  name: String,

  availability: {
    type: String,
    enum: ["yes", "no"],
    default: "yes",
  },
  img: {
    type: String,
  },
  description: String,
  ingredients : String,
});

const products = mongoose.model("products", productSchema);

export default products;
