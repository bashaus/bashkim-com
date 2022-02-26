import { ReactNode, useReducer } from "react";

import { NavigationContext } from "./context";
import { NavigationReducer } from "./reducer";
import { INITIAL_STATE } from "./state";

export type NavigationProviderProps = {
  children: ReactNode;
};

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [state, dispatch] = useReducer(NavigationReducer, INITIAL_STATE);

  return (
    <NavigationContext.Provider value={{ state, dispatch }}>
      {children}
    </NavigationContext.Provider>
  );
};
