import mongoose from "mongoose";

const Schema = mongoose.Schema;
const productGategorySchema = new Schema({
  product: [{
    type: Schema.Types.ObjectId,
    ref: "products",
  }],

  name: String,
  img :String
});

const productGategorys = mongoose.model("productGategorys", productGategorySchema);

export default productGategorys;
