export enum CookiesActionsTypes {
  DISMISS = "CookiesActionsTypes.DISMISS",
}

export type CookiesDismissAction = {
  type: CookiesActionsTypes.DISMISS;
};

export type CookiesActions = CookiesDismissAction;
