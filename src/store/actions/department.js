import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios-config-auth";

export const fetchDepartment = (callBack) => {
  return (dispatch) => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        dispatch(fetchSuccess(response.data.data));
        callBack();
      })
      .catch((error) => {});
  };
};

export const fetchSuccess = (response) => {
  return {
    type: actionTypes.FETCH_DEPARTMENT,
    data: response,
  };
};
