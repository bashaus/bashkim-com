import React from "react";
import CookiesReducer from "./reducer";
import { CookiesContextType, INITIAL_STATE } from "./state";

export const CookiesContext = React.createContext<CookiesContextType>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

interface CookiesStoreProps {
  children: React.ReactNode;
}

const CookiesStore = ({ children }: CookiesStoreProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(CookiesReducer, INITIAL_STATE);

  return (
    <CookiesContext.Provider value={{ state, dispatch }}>
      {children}
    </CookiesContext.Provider>
  );
};

export default CookiesStore;
