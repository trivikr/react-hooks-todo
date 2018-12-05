import React, { useReducer } from "react";
import StoreContext from "./StoreContext";

export default function Store({ rootReducer, children }) {
  const initialState = rootReducer();
  return (
    <StoreContext.Provider value={useReducer(rootReducer, initialState)}>
      {children}
    </StoreContext.Provider>
  );
}
