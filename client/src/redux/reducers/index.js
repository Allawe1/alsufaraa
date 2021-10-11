import { combineReducers } from "redux";

import product from "./product";
import productGategorys from "./productGategory";
import bestSelling from "./bestSelling";

export default combineReducers({
  productGategorys,
  product,
  bestSelling
});
