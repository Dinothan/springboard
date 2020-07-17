import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  errorDescription: null,
  error: false,
  logout: false,
  token: null,
};

const authSuccess = (state, action) => {
  console.log("state :", state);
  return updateObject(state, {
    error: false,
    token: action.data,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: false,
  });
};

const reducer = (state = initialState, action) => {
  console.log("action :", action);
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
