import React, { useContext } from "react";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";
import StoreContext from "../store/StoreContext";

export default function({ filter, children }) {
  const [state, dispatch] = useContext(StoreContext);
  return (
    <Link
      active={filter === state.visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(filter))}
    >
      {children}
    </Link>
  );
}
