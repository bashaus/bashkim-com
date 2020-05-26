import React, { useEffect } from "react";
import createPersistedState from "use-persisted-state";

import CookiesReducer from "./reducer";
import {
  CookiesContextType,
  CookiesContextState,
  INITIAL_STATE,
} from "./state";

const useCounterState = createPersistedState("cookiesDismissed");

export const CookiesContext = React.createContext<CookiesContextType>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

interface CookiesStoreProps {
  children: React.ReactNode;
}

const CookiesStore = ({ children }: CookiesStoreProps): JSX.Element => {
  const [isDismissed, setIsDismissed] = useCounterState(false);

  /* Retrieve initial state from persisted store */
  const initialState: CookiesContextState = {
    ...INITIAL_STATE,
    isDismissed,
  };

  const [state, dispatch] = React.useReducer(CookiesReducer, initialState);

  /* Persist state when it changes */
  useEffect(() => {
    setIsDismissed(state.isDismissed);
  }, [state]);

  return (
    <CookiesContext.Provider value={{ state, dispatch }}>
      {children}
    </CookiesContext.Provider>
  );
};

export default CookiesStore;
