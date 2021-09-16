import { NavigationActions } from "./actions";

export type NavigationState = {
  scrollAtTop: boolean;
};

export type NavigationContextType = {
  state: NavigationState;
  dispatch: React.Dispatch<NavigationActions>;
};

export const INITIAL_STATE: NavigationState = {
  scrollAtTop: true,
};
