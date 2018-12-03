import React, { useReducer, useEffect, useRef } from "react";
import { reset } from "../actions";
import StoreContext from "./StoreContext";

export default function Store({ rootReducer, children }) {
  const initialState = rootReducer();
  const [state, dispatch] = useReducer(rootReducer, initialState);

  function useEffectOnce(cb) {
    const didRun = useRef(false);

    useEffect(() => {
      if (!didRun.current) {
        cb();
        didRun.current = true;
      }
    });
  }

  useEffectOnce(() => {
    const raw = localStorage.getItem("data");
    if (raw) {
      dispatch(reset(JSON.parse(raw)));
    }
  });

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
