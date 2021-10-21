import { createContext } from "react";

import { INITIAL_STATE, NavigationContextType } from "./state";

export const NavigationContext = createContext<NavigationContextType>({
  state: INITIAL_STATE,
  dispatch: () => {
    /* void */
  },
});
