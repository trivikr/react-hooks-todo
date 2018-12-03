import React, { useContext } from "react";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";
import StoreContext from "../store/StoreContext";

export default function(props) {
  const [state, dispatch] = useContext(StoreContext);
  return (
    <Link
      active={props.filter === state.visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(props.filter))}
    >
      {props.children}
    </Link>
  );
}
