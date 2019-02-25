import { VisibilityFilter } from "./types";

export const setVisibilityFilter = (filter: VisibilityFilter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});
