export interface CookiesContextState {
  isDismissed: boolean;
}

export interface CookiesContextType {
  state: CookiesContextState;
  dispatch: React.Dispatch<any>;
}

export const INITIAL_STATE: CookiesContextState = {
  isDismissed: false,
};
