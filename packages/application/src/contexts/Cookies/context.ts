import { createContext } from "react";

import { CookiesValue, INITIAL_STATE } from "./state";

export const CookiesContext = createContext<CookiesValue>({
  state: INITIAL_STATE,
  dispatch: () => {
    /* void */
  },
});
