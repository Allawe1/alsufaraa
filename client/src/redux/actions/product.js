import * as api from "../api";

export const getProduct = () => async (dispatch) => {
  try {
    const date = await api.fetchProduct();
    dispatch({ type: "FETCH_ALL", payload: date });
  } catch (error) {
    console.log(error.message);
  }
};
export const getProductByID = (id) => async (dispatch) => {
  try {
    const date = await api.fetchProductById(id);
    dispatch({ type: "FETCH_BY_ID", payload: date });
  } catch (error) {
    console.log(error.message);
  }
};
