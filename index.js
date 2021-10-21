import express from "express";
import cors from "cors";
import Mongoose from "mongoose";
import productGategorys from "./models/productGategorys.js";
import products from "./models/products.js";
import bestSellings from "./models/bestSellings.js";
import bodyParser from "body-parser";
import productRouter from "./routes/product.js";
import bestSellingsRouter from "./routes/bestSelling.js";
import productGategorysRouter from "./routes/productGategorys.js";
import AdminBro from "admin-bro";
import AdminBroExpress from "@admin-bro/express";
import AdminBroMongoose from "@admin-bro/mongoose";
import { addImage } from "./controllers/products.js";
import uploadFeature from "@admin-bro/upload";
import path from "path";
import dotenv from 'dotenv'
dotenv.config()
AdminBro.registerAdapter(AdminBroMongoose);
const app = express();
app.use("/images", express.static("./images"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
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
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'restricted'], required: true },
})


const adminBro = new AdminBro({
  Database: [connection],
  rootPath: "/admin",
  resources: [products, productGategorys, bestSellings , User],
});
const router = AdminBroExpress.buildRouter(adminBro);

app.use(adminBro.options.rootPath, router);
app.use("/api/product", productRouter);
app.use("/api/bestSelling", bestSellingsRouter);
app.use("/api/productGategorys", productGategorysRouter);

app.use(express.static(path.join("client/build")));
console.log(__dirname, "1");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
console.log(__dirname, "2");

app.get("/api", (req, res) => {
  res.send("hello to home");
});

app.listen(PORT, () =>
  console.log(`AdminBro is under localhost:${PORT}/admin`)
);
