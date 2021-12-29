import mongoose from "mongoose";

const Schema = mongoose.Schema;
const orderSchema = new Schema(
  {
    orderBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    toastW: Number,
    toastB: Number,
    toastZ: Number,
    burgerL: Number,
    burgerM: Number,
    burgerS: Number,
    samoonL: Number,
    samoonM: Number,
    samoonS: Number,
    samoonT: Number,
    kaakF: Number,
    kaakD: Number,
    kaakB: Number,
    kaak7: Number,
    kaakM: Number,
    basbosa: Number,
    banOle: Number,
    mawal7: Number,
    stock12: Number,
    saj30: Number,
    saj25: Number,
    st7: Number,
    kintaky: Number,
    pizza: Number,
    cake: Number,
    donut: Number,
    datly: Number,
    Status: {
      type: [
        {
          type: String,
          enum: ["delivered", "not delivered"],
        },
      ],
      default: ["not delivered"],
    },
    // action: {
    //   type: String,
    //   default: `<MDBBtn color="purple" size="sm">
    //       edit
    //     </MDBBtn>`,
    // },
  },

  { timestamps: true }
);

const orders = mongoose.model("orders", orderSchema);

export default orders;
