export default (productGategorys = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "FETCH_ALL_PRODUCT":
      return action.payload
    default:
      return productGategorys;
  }
};
