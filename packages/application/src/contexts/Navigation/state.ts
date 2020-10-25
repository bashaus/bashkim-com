export type NavigationContextState = {
  scrollAtTop: boolean;
  menuIsVisible: boolean;
};

export type NavigationContextType = {
  state: NavigationContextState;
  dispatch: React.Dispatch<any>;
};

export const INITIAL_STATE: NavigationContextState = {
  scrollAtTop: false,
  menuIsVisible: false,
};
