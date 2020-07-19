import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios-config-auth";
import Cookies from "js-cookie";
import { fetchDepartment } from "./department";

export const auth = (email, password, callBack) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: {
        email: email,
        password: password,
      },
    }).then((response) => {
      Cookies.set("auth", response.data.token);
      dispatch(authSuccess(response.data.token));
      dispatch(
        fetchDepartment(() => {
          callBack(true);
        })
      );
    });
  };
};

export const authSuccess = (response) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    data: response,
  };
};

export const logoutSuccess = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const logout = () => {
  return (dispatch) => {
    Cookies.remove("auth");
    dispatch(logoutSuccess());
  };
};
