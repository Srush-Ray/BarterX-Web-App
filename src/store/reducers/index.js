import { combineReducers } from "redux";
import error from "./error";
import {currentUser,walletPath,pastTransaction} from "./users";
import {currentProduct,productHistory,products} from "./products";

import success from "./success";
export default combineReducers({
    currentUser,
    error,
    success,
    walletPath,
    pastTransaction,
    currentProduct,
    productHistory,
    products
  });
  