import { ReactNode, useReducer } from "react";

import { NavigationContext } from "./Navigation.context";
import { NavigationReducer } from "./Navigation.reducer";
import { navigationStateInitial } from "./Navigation.state";

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
