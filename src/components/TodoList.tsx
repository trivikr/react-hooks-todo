import React from "react";
import Todo from "./Todo";
import { TodoType } from "./TodoType";

const TodoList: React.FC<{
  todos: TodoType[];
  toggleTodo(id: number): void;
}> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
