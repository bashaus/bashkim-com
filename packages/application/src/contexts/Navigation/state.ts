import { Dispatch } from "react";

import { NavigationActions } from "./actions";

export type NavigationState = {
  scrollAtTop: boolean;
};

export type NavigationContextType = {
  state: NavigationState;
  dispatch: Dispatch<NavigationActions>;
};

export const INITIAL_STATE: NavigationState = {
  scrollAtTop: true,
};
