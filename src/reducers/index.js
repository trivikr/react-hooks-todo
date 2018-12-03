import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export default function(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}
