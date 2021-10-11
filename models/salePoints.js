import Mongoose from "mongoose";

const salePointSchema = Mongoose.Schema({
  name: String,

  state: String,

  city: String,
});

const salePoints = Mongoose.model("salePoint", salePointSchema);

export default salePoints;
