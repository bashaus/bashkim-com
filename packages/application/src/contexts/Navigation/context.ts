import { createContext } from "react";

import { NavigationContextType, INITIAL_STATE } from "./state";

export const NavigationContext = createContext<NavigationContextType>({
  state: INITIAL_STATE,
  dispatch: () => {
    /* void */
  },
});
