import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import axios from "redux-interceptor";
import axiosMiddleware from "redux-axios-middleware";
import authReducer from "./reducers/auth";
import departmentReducer from "./reducers/department";
import userReducer from "./reducers/createUser";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  department: departmentReducer,
  users: userReducer,
});

const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(axiosMiddleware(axios), thunk))
  );
};

export default configureStore;
