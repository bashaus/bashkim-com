export interface NavigationContextState {
  atTop: boolean;
  isVisible: boolean;
}

export interface NavigationContextType {
  state: NavigationContextState;
  dispatch: React.Dispatch<any>;
}

export const INITIAL_STATE: NavigationContextState = {
  atTop: false,
  isVisible: false,
};
