import React, { useReducer, useEffect } from "react";
import { reset } from "../actions";
import StoreContext from "./StoreContext";

export default function Store({ rootReducer, children }) {
  const initialState = rootReducer();
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    const raw = localStorage.getItem("data");
    if (raw) {
      dispatch(reset(JSON.parse(raw)));
    }
  }, []);

  useEffect(
    () => {
      localStorage.setItem("data", JSON.stringify(state));
    },
    [state]
  );

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
}
