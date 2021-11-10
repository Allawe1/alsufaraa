import express from "express";
import cors from "cors";
import Mongoose from "mongoose";
import productGategorys from "./models/productGategorys.js";
import products from "./models/products.js";
import bestSellings from "./models/bestSellings.js";
import productRouter from "./routes/product.js";
import bestSellingsRouter from "./routes/bestSelling.js";
import productGategorysRouter from "./routes/productGategorys.js";
import AdminBro from "admin-bro";
import AdminBroExpressjs from "@admin-bro/express";
import AdminBroMongoose from "@admin-bro/mongoose";
import path from "path";
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config()
AdminBro.registerAdapter(AdminBroMongoose);
const app = express();
app.use("/images", express.static("./images"));

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

const connection = await Mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const User = Mongoose.model('User', {
  email: { type: String, required: true },
  encryptedPassword: { type: String, required: true },
  role: { type: String, enum: ['admin', 'restricted'], required: true },
})


const adminBro = new AdminBro({
  Database: [connection],
  rootPath: "/admin",
  resources: [ bestSellings , productGategorys , products , {
    resource: User,
    options: {
      properties: {
        encryptedPassword: {
          isVisible: false,
        },
        password: {
          type: 'string',
          isVisible: {
            list: false, edit: true, filter: false, show: false,
          },
        },
      },
      actions: {
        new: {
          before: async (request) => {
            if(request.payload.password) {
              request.payload = {
                ...request.payload,
                encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                password: undefined,
              }
            }
            return request
          },
        }
      }
    }
  }],
});
const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email })
    if (user) {
      const matched = await bcrypt.compare(password, user.encryptedPassword)
      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: process.env.PASSWORD_COOKIE,
})
console.log(`/alsufaraa${adminBro.options.rootPath}`);
app.use(`/alsufaraa${adminBro.options.rootPath}`, router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/product", productRouter);
app.use("/api/bestSelling", bestSellingsRouter);
app.use("/api/productGategorys", productGategorysRouter);

// app.use(express.static(path.join("client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });


app.get("/", (req, res) => {
  res.send("hello to home");
});

app.listen(PORT, () =>
  console.log(`AdminBro is under localhost:${PORT}/admin`)
);
