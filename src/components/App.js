import React, { useReducer } from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import rootReducer from "../reducers";
import { VisibilityFilters } from "../actions";
import Store from "../store/Store";

const App = () => {
  return (
    <Store
      rootReducer={rootReducer}
      initialValue={{
        visibilityFilter: VisibilityFilters.SHOW_ALL,
        todos: []
      }}
    >
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </Store>
  );
};

export default App;
