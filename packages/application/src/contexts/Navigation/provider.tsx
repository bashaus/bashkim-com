import { ReactNode, useReducer } from "react";

import { NavigationContext } from "./context";
import { NavigationReducer } from "./reducer";
import { NavigationStateInitial } from "./state";

export type NavigationProviderProps = {
  children: ReactNode;
};

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [navigationState, navigationDispatch] = useReducer(
    NavigationReducer,
    NavigationStateInitial
  );

  return (
    <NavigationContext.Provider value={{ navigationState, navigationDispatch }}>
      {children}
    </NavigationContext.Provider>
  );
};
