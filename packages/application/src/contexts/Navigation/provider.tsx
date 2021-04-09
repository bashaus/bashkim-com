import { useReducer } from "react";

import { NavigationContext } from "./context";
import { NavigationReducer } from "./reducer";
import { INITIAL_STATE } from "./state";

type NavigationProviderProps = {
  children: React.ReactNode;
};

export const NavigationProvider = ({
  children,
}: NavigationProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(NavigationReducer, INITIAL_STATE);

  return (
    <NavigationContext.Provider value={{ state, dispatch }}>
      {children}
    </NavigationContext.Provider>
  );
};
