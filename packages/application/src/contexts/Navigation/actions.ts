import { ScrollDirection } from "%contexts/Navigation/types";

export enum NavigationActionsTypes {
  MENU_HIDE = "NavigationActionsTypes.MENU_HIDE",
  MENU_TOGGLE = "NavigationActionsTypes.MENU_TOGGLE",

  SET_SCROLL_AT_TOP = "NavigationActionsTypes.SET_SCROLL_AT_TOP",
  SET_SCROLL_DIRECTION = "NavigationActionsTypes.SET_SCROLL_DIRECTION",
}

export type NavigationMenuHideAction = {
  type: NavigationActionsTypes.MENU_HIDE;
};

export type NavigationMenuToggleAction = {
  type: NavigationActionsTypes.MENU_TOGGLE;
};

export type NavigationSetScrollAtTopAction = {
  type: NavigationActionsTypes.SET_SCROLL_AT_TOP;
  payload: boolean;
};

export type NavigationSetScrollDirectionAction = {
  type: NavigationActionsTypes.SET_SCROLL_DIRECTION;
  payload: ScrollDirection;
};

export type NavigationActions =
  | NavigationMenuHideAction
  | NavigationMenuToggleAction
  | NavigationSetScrollAtTopAction
  | NavigationSetScrollDirectionAction;
