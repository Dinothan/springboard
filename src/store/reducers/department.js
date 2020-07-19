import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  departments: []
};

const fetchDepartment = (state, action) => {
  return updateObject(state, {
    departments: action.data,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DEPARTMENT:
      return fetchDepartment(state, action);
    default:
      return state;
  }
};

export default reducer;
