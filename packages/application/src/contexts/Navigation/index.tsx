import React, { createContext, useReducer } from "react";
import NavigationReducer from "./reducer";
import { NavigationContextType, INITIAL_STATE } from "./state";

export const NavigationContext = createContext<NavigationContextType>({
  state: INITIAL_STATE,
  dispatch: () => {
    /* void */
  },
});

type NavigationStoreProps = {
  children: React.ReactNode;
};

const NavigationStore = ({ children }: NavigationStoreProps): JSX.Element => {
  const [state, dispatch] = useReducer(NavigationReducer, INITIAL_STATE);

  return (
    <NavigationContext.Provider value={{ state, dispatch }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationStore;
