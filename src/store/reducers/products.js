import {
    SET_PRODUCTS,
    SET_CURRENT_PRODUCTS,
    SET_PRODUCT_HISTORY
  } from "../actionTypes";
  
  export const currentProduct = (state = {}, action) => {
    switch (action.type) {
      case SET_CURRENT_PRODUCTS:
        return action.product;
      default:
        return state;
    }
  };

  export const productHistory = (state = {}, action) => {
    switch (action.type) {
      case SET_PRODUCT_HISTORY:
        return action.product;
      default:
        return state;
    }
  };
  