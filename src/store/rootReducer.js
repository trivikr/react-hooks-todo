import { todosReducer } from "./todos/reducer";
import { visibilityFilterReducer } from "./visibilityFilter/reducer";

export default function(state = {}, action = {}) {
  return {
    visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action),
    todos: todosReducer(state.todos, action)
  };
}
