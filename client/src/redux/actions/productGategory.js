import * as api from "../api";


export const getProductGategorys = () => async (dispatch) => {
  try {
    const {data} = await api.fetchProductGategorys();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getProductGategorysProduct = (name) => async (dispatch) => {
  try {
    const date = await api.fetchProductGategorysProduct(name);
    dispatch({ type: "FETCH_ALL_PRODUCT", payload: date });
  } catch (error) {
    console.log(error.message);
  }
};
