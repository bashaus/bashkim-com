export enum NavigationAction {
  SET_SCROLL_AT_TOP = "NavigationAction.SET_SCROLL_AT_TOP",
}

/* NavigationActionSetScrollAtTop */

export type NavigationActionSetScrollAtTopPayloadType = {
  scrollAtTop: boolean;
};

export type NavigationActionSetScrollAtTopType = {
  type: NavigationAction.SET_SCROLL_AT_TOP;
  payload: NavigationActionSetScrollAtTopPayloadType;
};

export const NavigationActionSetScrollAtTop = (
  payload: NavigationActionSetScrollAtTopPayloadType,
): NavigationActionSetScrollAtTopType => ({
  type: NavigationAction.SET_SCROLL_AT_TOP,
  payload,
});

/* */

export type NavigationActionType = NavigationActionSetScrollAtTopType;
