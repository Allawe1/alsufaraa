import * as api from "../api";

export const getBestSelling = () => async (dispatch) => {
  try {
    const {data} = await api.fetchBestSelling();
    dispatch({ type: "FETCH_ALL", payload: data });
   
  } catch (error) {
    console.log(error.message);
  }
};
