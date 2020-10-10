export type CookiesContextState = {
  isDismissed: boolean;
};

export type CookiesContextType = {
  state: CookiesContextState;
  dispatch: React.Dispatch<any>;
};

export const INITIAL_STATE: CookiesContextState = {
  isDismissed: false,
};
