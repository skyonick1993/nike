import * as actionTypes from "../actionTypes";

let initialState = {
  productList: [],
  isLoading: false,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_API_LISTPRODUCT:
      state.productList = payload;
      break;
    case actionTypes.IS_LOADING_LIST_PRODUCT:
      state.isLoading = payload;
      break;
    default:
      break;
  }
  return { ...state };
};

export default productReducer;
