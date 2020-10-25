import { ScrollDirection } from "./types";

export type NavigationContextState = {
  menuIsVisible: boolean;
  scrollAtTop: boolean;
  scrollDirection: ScrollDirection;
};

export type NavigationContextType = {
  state: NavigationContextState;
  dispatch: React.Dispatch<any>;
};

export const INITIAL_STATE: NavigationContextState = {
  menuIsVisible: false,
  scrollAtTop: true,
  scrollDirection: ScrollDirection.UP,
};
