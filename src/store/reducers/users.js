import {
    SET_USER,
    WALLET_PATH,
    SET_PREVIOUS_TRANSACTION
  } from "../actionTypes";
  
  export const currentUser = (state = {}, action) => {
    switch (action.type) {
      case SET_USER:
        return action.user;
      default:
        return state;
    }
  };

  export const walletPath= ( state ="",action)=>{
    switch (action.type) {
      case WALLET_PATH:
        return action.path;
      default:
        return state;
    }
  };

  export const pastTransaction= ( state =[],action)=>{
    switch (action.type) {
      case SET_PREVIOUS_TRANSACTION:
        return action.transactions;
      default:
        return state;
    }
  };