import React, { useContext } from "react";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilter } from "../actions";
import StoreContext from "../store/StoreContext";
import { TodoType } from "../components/TodoType";

const getVisibleTodos = (todos: TodoType[], filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos;
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const VisibleTodoList = () => {
  const [{ todos, visibilityFilter }, dispatch] = useContext(StoreContext);
  return (
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      toggleTodo={id => dispatch(toggleTodo(id))}
    />
  );
};

export default VisibleTodoList;
