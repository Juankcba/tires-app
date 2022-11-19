import { FC, useEffect, useReducer, PropsWithChildren } from "react";

import { UiContext } from "./uiContext";
import { uiReducer } from "./uiReducer";

const UI_INITIAL_STATE = {
  language: "en",
};

export const UiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const setLanguage = (state) => {
    console.log(state);
    dispatch({
      type: "[Modal] - Update Language",
      payload: Object.values(state)[0],
    });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        setLanguage,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
