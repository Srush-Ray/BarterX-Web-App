import {
    SET_PRODUCTS,
    SET_CURRENT_PRODUCTS
  } from "../actionTypes";
  
  export const currentProduct = (state = {}, action) => {
    switch (action.type) {
      case SET_CURRENT_PRODUCTS:
        return action.product;
      default:
        return state;
    }
  };

 