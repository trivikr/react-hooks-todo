import React from "react";

const Todo: React.FC<{ onClick(): void; completed: boolean; text: string }> = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

export default Todo;
