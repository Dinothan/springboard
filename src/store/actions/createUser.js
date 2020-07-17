import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios-config-auth";

export const createUser = (
  firstName,
  lastName,
  email,
  department,
  roleArray,
  callBack
) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "https://reqres.in/api/users",
      data: {
        firstName: firstName,
        lastName: lastName,
        department: department,
        email: email,
        roleArray: roleArray,
      },
    }).then((response) => {
      dispatch(createSuccess(response.data));
      callBack(true);
    });
  };
};

export const createSuccess = (response) => {
  return {
    type: actionTypes.CREATE_SUCCESS,
    data: response,
  };
};

export const onDelete = (fn) => {
  return {
    type: actionTypes.DELETE_SUCCESS,
    data: fn,
  };
};
