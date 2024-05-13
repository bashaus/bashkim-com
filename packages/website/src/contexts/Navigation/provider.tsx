import { ReactNode, useMemo, useReducer } from "react";

import { NavigationContext } from "./context";
import { NavigationReducer } from "./reducer";
import { navigationStateInitial } from "./state";

export type NavigationProviderProps = {
  children: ReactNode;
};

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [navigationState, navigationDispatch] = useReducer(
    NavigationReducer,
    navigationStateInitial,
  );

  const providerValue = useMemo(
    () => ({ navigationState, navigationDispatch }),
    [navigationState, navigationDispatch],
  );

  return (
    <NavigationContext.Provider value={providerValue}>
      {children}
    </NavigationContext.Provider>
  );
};
