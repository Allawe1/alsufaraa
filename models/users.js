import mongoose from "mongoose";
// const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  order: [
    {
      type: Schema.Types.ObjectId,
      ref: "orders",
    },
  ],
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [
      {
        type: String,
        enum: ["user", "admin"],
      },
    ],
    default: ["user"],
  },
});
// userSchema.pre("save", async function (next) {
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    var auth = false;
    if (password == user.password) {
      auth = true;
    } else {
      auth = false;
    }

    if (auth) {
      return user;
    }
    throw Error("wrong password");
  }
  throw Error("wrong email");
};

const users = mongoose.model("users", userSchema);

export default users;
