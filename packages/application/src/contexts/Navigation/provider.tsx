import { ReactNode, useReducer } from "react";

import { NavigationContext } from "./context";
import { NavigationReducer } from "./reducer";
import { navigationStateInitial } from "./state";

export type NavigationProviderProps = {
  children: ReactNode;
};

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [navigationState, navigationDispatch] = useReducer(
    NavigationReducer,
    navigationStateInitial
  );

  return (
    <NavigationContext.Provider value={{ navigationState, navigationDispatch }}>
      {children}
    </NavigationContext.Provider>
  );
};
