import productService from "../../apiServices/ProductService";
import * as actionTypes from "../actionTypes";
import createAction from "./createAction";

export const getProductList = (gender, typeProduct) => {
  return async (dispatch) => {
    try {
      dispatch(
        createAction({
          type: actionTypes.IS_LOADING_LIST_PRODUCT,
          payload: true,
        })
      );
      const res = await productService.getProductList(gender, typeProduct);
      dispatch(
        createAction({
          type: actionTypes.FETCH_API_LISTPRODUCT,
          payload: res.data,
        })
      );
      dispatch(
        createAction({
          type: actionTypes.IS_LOADING_LIST_PRODUCT,
          payload: false,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
