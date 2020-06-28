import api from "../../services/api";
import {
    SET_PRODUCTS,
    SET_CURRENT_PRODUCTS
} from "../actionTypes";
import { addError, removeError } from "./error";
import { addSuccess, removeSuccessMessage } from "./success";

export const currentProduct = (user) => ({
    type: SET_CURRENT_PRODUCTS,
    user,
  });

  export const storeProduct = (data) => {
    return async (dispatch) => {
      try {
        //   console.log(data);
          const product = await api.call("post", "products/store",data);
          dispatch(addSuccess(product.message));
          dispatch(removeError());
      } catch (err) {
        dispatch(addError(err.message));
      }
    };
  };

  export const readProduct = (data) => {
    return async (dispatch) => {
      try {
          const product = await api.call("get", "products/read",data);
          dispatch(addSuccess(product.message));
          dispatch(removeError());
      } catch (err) {
        dispatch(addError(err.message));
      }
    };
  };

  export const updateProduct = (data) => {
    return async (dispatch) => {
      try {
          const product = await api.call("post", "products/update",data);
          dispatch(addSuccess(product.message));
          dispatch(removeError());
      } catch (err) {
        dispatch(addError(err.message));
      }
    };
  };
