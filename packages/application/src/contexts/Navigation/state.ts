import { NavigationActions } from "./actions";
import { ScrollDirection } from "./types";

export type NavigationState = {
  menuIsVisible: boolean;
  scrollAtTop: boolean;
  scrollDirection: ScrollDirection;
};

export type NavigationContextType = {
  state: NavigationState;
  dispatch: React.Dispatch<NavigationActions>;
};

export const INITIAL_STATE: NavigationState = {
  menuIsVisible: false,
  scrollAtTop: true,
  scrollDirection: ScrollDirection.UP,
};
