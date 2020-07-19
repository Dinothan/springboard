import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  users: [],
};

const createSuccess = (state, action) => {
  let users = state.users ? state.users : [];
  users.push(action.data);
  return updateObject(state, {
    users: users,
  });
};

const deleteSuccess = (state, action) => {
  let users = state.users
    ? state.users.filter((user) => {
        return user.firstName !== action.data;
      })
    : [];
  return updateObject(state, {
    users: users,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_SUCCESS:
      return createSuccess(state, action);
    case actionTypes.DELETE_SUCCESS:
      return deleteSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
