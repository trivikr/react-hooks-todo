import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import rootReducer from "./reducers";
import { VisibilityFilters } from "./actions";
import Store from "./store/Store";

render(
  <Store
    rootReducer={rootReducer}
    initialValue={{
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todos: []
    }}
  >
    <App />
  </Store>,
  document.getElementById("root")
);
