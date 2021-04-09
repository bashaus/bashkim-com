import React, { useEffect, useReducer } from "react";
import createPersistedState from "use-persisted-state";

import { CookiesContext } from "./context";
import { CookiesReducer } from "./reducer";

type CookiesProviderProps = {
  children: React.ReactNode;
};

const useCookiesDismissedState = createPersistedState("cookiesDismissed");

const CookiesProvider = ({ children }: CookiesProviderProps): JSX.Element => {
  const [isDismissed, setIsDismissed] = useCookiesDismissedState(false);

  const [state, dispatch] = useReducer(CookiesReducer, {
    isDismissed,
  });

  /* Persist state when it changes */
  useEffect(() => setIsDismissed(state.isDismissed), [
    state.isDismissed,
    setIsDismissed,
  ]);

  return (
    <CookiesContext.Provider value={{ state, dispatch }}>
      {children}
    </CookiesContext.Provider>
  );
};

export default CookiesProvider;
