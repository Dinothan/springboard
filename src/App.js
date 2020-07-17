import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./routes/routes";
import { Provider } from "react-redux";
import configureStore from "./store/store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
