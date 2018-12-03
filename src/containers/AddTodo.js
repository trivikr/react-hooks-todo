import React, { useContext } from "react";
import { addTodo } from "../actions";
import StoreContext from "../store/StoreContext";

const AddTodo = () => {
  let input;
  const [state, dispatch] = useContext(StoreContext);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
