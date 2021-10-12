import express from "express";
import cors from "cors";
import Mongoose from "mongoose";
import productGategorys from './models/productGategorys.js'
import products from "./models/products.js";
import bestSellings from "./models/bestSellings.js";
import bodyParser from "body-parser";
import productRouter from "./routes/product.js";
import bestSellingsRouter from "./routes/bestSelling.js";
import productGategorysRouter from "./routes/productGategorys.js";
import AdminBro from "admin-bro";
import AdminBroExpress from "@admin-bro/express";
import AdminBroMongoose from '@admin-bro/mongoose'
import {addImage} from './controllers/products.js'
import uploadFeature  from '@admin-bro/upload'
import path from "path";


AdminBro.registerAdapter(AdminBroMongoose)
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
const Db_URL =
  "mongodb+srv://ali:ali123@cluster0.qef8w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
console.log(PORT);
const __dirname = path.resolve();





const run = async () => {
  const connection = await  Mongoose.connect(Db_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  const adminBro = new AdminBro({
    Database: [connection],
    rootPath: '/admin',
    resources: [
      products,
      productGategorys,
      bestSellings
    ],
  
  })
  const router = AdminBroExpress.buildRouter (adminBro)

  app.use(adminBro.options.rootPath, router)
  
}
run()

app.listen(PORT, () => console.log(`AdminBro is under localhost:${PORT}/admin`))
  
app.use(express.static(path.join(__dirname, '../client/src')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/src', 'index.html'));
});

app.get("/", (req, res) => {
  res.send("hello to home");
});
app.use("/product", productRouter);
app.use("/bestSelling", bestSellingsRouter);
app.use("/productGategorys", productGategorysRouter);


  







