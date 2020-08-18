import api from "../../services/api";
import {
    SET_USER,
    SET_PREVIOUS_TRANSACTION,
    WALLET_PATH
} from "../actionTypes";
import { addError, removeError } from "./error";
import { addSuccess, removeSuccessMessage } from "./success";
import apis from "../../services/api";
export const setCurrentUser = (user) => ({
    type: SET_USER,
    user,
  });
export const setwalletPath=(path)=>({
  type: WALLET_PATH,  
  path,
});
export const setPastTransaction=(transactions)=>({
  type:SET_PREVIOUS_TRANSACTION,
  transactions,
});


  export const createWallet = (data) => {
    return async (dispatch) => {
      try {
        //   console.log(data);
          const user = await api.call("post", "users/createWallet",data);
          const successMessage="Wallet created successfully";
          // dispatch(setwalletPath(user.message+"/"+data.usr_id+"/"+data.usr_id));
          let token=data.usr_id+","+data.orgName+","+data.org_aff+","+data.email;
          localStorage.setItem("wallet",token);
          // apis.setToken(token);
          console.log(successMessage);
          dispatch(addSuccess(successMessage));
          dispatch(removeError());
      } catch (err) {
        dispatch(addError(err.message));
      }
    };
  };

  export const getTransactions = (path) => {
    return async (dispatch) => {
      try {
        const transactions = await api.call("get", `users/getTxs/${path}`);
        console.log(transactions);
          if(transactions===null){
            dispatch(addError("No transation done yet."));
          }else{
            dispatch(setPastTransaction(transactions));
            dispatch(removeError());  
          }
      } catch (err) {
        dispatch(addError(err.message));
      }
    };
  };

  
  export const logout_f = () => {
    return (dispatch) => {
      localStorage.clear();
      api.setToken(null);
      dispatch(removeError());
    };
  };