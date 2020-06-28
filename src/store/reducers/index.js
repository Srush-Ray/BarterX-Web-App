import { combineReducers } from "redux";
import error from "./error";
import {currentUser,walletPath} from "./users";
import success from "./success";
export default combineReducers({
    currentUser,
    error,
    success,
    walletPath,
  });
  