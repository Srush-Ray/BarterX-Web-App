import api from "../../services/api";
import {
    SET_PRODUCTS,
    SET_CURRENT_PRODUCTS,
    SET_PRODUCT_HISTORY
} from "../actionTypes";
import { addError, removeError } from "./error";
import { addSuccess, removeSuccessMessage } from "./success";

export const setCurrentProduct = (product) => ({
    type: SET_CURRENT_PRODUCTS,
    product,
  });
  export const setProductHistory = (product) => ({
    type: SET_PRODUCT_HISTORY,
    product,
  });
  export const setProducts = (product) => ({
    type: SET_PRODUCTS,
    product,
  });
  export const storeProduct = (path,data) => {
    return async (dispatch) => {
      try {
        console.log(data);
          const product = await api.call("post", `products/store/${path}`,data);
          dispatch(addSuccess(product.message));
          dispatch(removeError());
      } catch (err) {
        dispatch(addError(err.message));
      }
    };
  };

  export const readProduct = (path,data) => {
    return async (dispatch) => {
      try {
          const product = await api.call("get", `products/read/${path}`,data);
          // console.log(product.message);
          dispatch(setCurrentProduct(product.message));
          dispatch(removeError());
      } catch (err) {
        dispatch(addError(err.message));
      }
    };
  };

  export const updateProduct = (path,data) => {
    return async (dispatch) => {
      try {
        console.log(data);
          const product = await api.call("post", `products/update/${path}`,data);
          dispatch(addSuccess(product.message));
          dispatch(removeError());
      } catch (err) {
        dispatch(addError(err.message));
      }
    };
  };

  export const getProductHistory = (path,data) => {
    return async (dispatch) => {
      try {
        console.log(data);
        console.log(path);
          const product = await api.call("post", `products/getProductHistory/${path}`,data);
          console.log(product);
       
          dispatch(setProductHistory(product));
          dispatch(removeError());
      } catch (err) {
        dispatch(addError(err.message));
      }
    };
  };

  export const getCategory = (path) => {
    return async (dispatch) => {
      try {
        console.log(path);
          const product = await api.call("get", `products/category/${path}`);
          console.log(product);
          if(product.message==="null")
          {
            dispatch(addError("No Products Found"));
          }else
          {
            dispatch(setProductHistory(JSON.parse(product.message)));
            dispatch(removeError());
          }
          } catch (err) {
        dispatch(addError(err.message));
      }
    };
  };

  export const getIndexed = (path,data) => {
    return async (dispatch) => {
      try {
          console.log(data);
          const product = await api.call("post", `products/index/${path}`,data);
          console.log(product);
          if(product.message==="null")
          {
            dispatch(addError("No Products Found"));
          }else
          {
            dispatch(setProducts(JSON.parse(product.message)));
            dispatch(removeError());
          }
          } catch (err) {
        dispatch(addError(err.message));
      }
    };
  };