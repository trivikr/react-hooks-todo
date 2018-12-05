import React, { useContext } from "react";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";
import StoreContext from "../store/StoreContext";

export default function FilterLink({ filter, children }) {
  const [{ visibilityFilter }, dispatch] = useContext(StoreContext);
  return (
    <Link
      active={filter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(filter))}
    >
      {children}
    </Link>
  );
}
