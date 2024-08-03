import React, { Dispatch, SetStateAction } from "react";

export type ContextState = {
  darkMode: boolean,
  setDarkMode: Dispatch<SetStateAction<boolean>>,
}

const StateContext = React.createContext({} as ContextState)

export default StateContext