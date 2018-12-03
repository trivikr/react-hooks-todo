import React, { useReducer } from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import rootReducer from "../reducers";
import { VisibilityFilters } from "../actions";

const Context = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
  });
  return (
    <Context.Provider value={dispatch}>
      <div>
        <AddTodo dispatch={dispatch} />
        <VisibleTodoList state={state} dispatch={dispatch} />
        {/*<Footer />*/}
      </div>
    </Context.Provider>
  );
};

export default App;
