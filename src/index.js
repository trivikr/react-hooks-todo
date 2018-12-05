import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import rootReducer from "./reducers";
import Store from "./store/Store";

render(
  <Store rootReducer={rootReducer}>
    <App />
  </Store>,
  document.getElementById("root")
);
