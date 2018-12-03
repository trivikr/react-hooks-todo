import { VisibilityFilters } from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    case "RESET":
      return action.payload.visibilityFilter;
    default:
      return state;
  }
};

export default visibilityFilter;
