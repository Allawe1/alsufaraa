import mongoose from "mongoose";

const Schema = mongoose.Schema;
const bestSellingSchema = new Schema({
  name: String,
  img: {
    type: String,
  },
});

const bestSellings = mongoose.model("bestSellings", bestSellingSchema);

export default bestSellings;
