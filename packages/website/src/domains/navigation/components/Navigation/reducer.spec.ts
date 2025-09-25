import { NavigationActionSetScrollAtTop } from "./actions";
import NavigationReducer from "./reducer";
import { NavigationState } from "./state";

describe("Navigation#reducer", () => {
  it("should keep the value", () => {
    const initState: NavigationState = {
      scrollAtTop: true,
    };

    const state = NavigationReducer(
      initState,
      NavigationActionSetScrollAtTop({ scrollAtTop: true }),
    );

    expect(state.scrollAtTop).toBe(true);
  });

  it("should update", () => {
    const initState: NavigationState = {
      scrollAtTop: true,
    };

    const state = NavigationReducer(
      initState,
      NavigationActionSetScrollAtTop({ scrollAtTop: false }),
    );

    expect(state.scrollAtTop).toBe(false);
  });
});
