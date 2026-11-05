import { NavigationAction, NavigationActionSetScrollAtTop } from "./actions";

describe("NavigationAction", () => {
  it("should generate when true", () => {
    const action = NavigationActionSetScrollAtTop({
      scrollAtTop: true,
    });

    expect(action.type).toEqual(NavigationAction.SET_SCROLL_AT_TOP);
    expect(action.payload).toEqual({ scrollAtTop: true });
  });

  it("should generate when false", () => {
    const action = NavigationActionSetScrollAtTop({
      scrollAtTop: false,
    });

    expect(action.type).toEqual(NavigationAction.SET_SCROLL_AT_TOP);
    expect(action.payload).toEqual({ scrollAtTop: false });
  });
});
