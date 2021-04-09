import { CookiesActions } from "./actions";

export type CookiesState = {
  isDismissed: boolean;
};

export type CookiesValue = {
  state: CookiesState;
  dispatch: React.Dispatch<CookiesActions>;
};

export const INITIAL_STATE: CookiesState = {
  isDismissed: false,
};
