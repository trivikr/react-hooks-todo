import React, { useReducer } from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import rootReducer from "../reducers";

const Context = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, []);
  return (
    <Context.Provider value={dispatch}>
      <div>
        <AddTodo dispatch={dispatch} />
        {/*<VisibleTodoList />
        <Footer />*/}
      </div>
    </Context.Provider>
  );
};

export default App;
