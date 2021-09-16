export enum NavigationActionsTypes {
  SET_SCROLL_AT_TOP = "NavigationActionsTypes.SET_SCROLL_AT_TOP",
}

export type NavigationSetScrollAtTopAction = {
  type: NavigationActionsTypes.SET_SCROLL_AT_TOP;
  payload: boolean;
};

export type NavigationActions = NavigationSetScrollAtTopAction;
