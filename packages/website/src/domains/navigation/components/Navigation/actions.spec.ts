import { NavigationAction, NavigationActionSetScrollAtTop } from "./actions";

describe("Navigation#actions", () => {
  it("should generate", () => {
    const action = NavigationActionSetScrollAtTop({
      scrollAtTop: true,
    });

    expect(action.type).toEqual(NavigationAction.SET_SCROLL_AT_TOP);
    expect(action.payload).toEqual({ scrollAtTop: true });
  });

  it("should generate", () => {
    const action = NavigationActionSetScrollAtTop({
      scrollAtTop: false,
    });

    expect(action.type).toEqual(NavigationAction.SET_SCROLL_AT_TOP);
    expect(action.payload).toEqual({ scrollAtTop: false });
  });
});
