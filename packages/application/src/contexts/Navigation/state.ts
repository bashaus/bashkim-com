export type NavigationContextState = {
  atTop: boolean;
  isVisible: boolean;
};

export type NavigationContextType = {
  state: NavigationContextState;
  dispatch: React.Dispatch<any>;
};

export const INITIAL_STATE: NavigationContextState = {
  atTop: false,
  isVisible: false,
};
