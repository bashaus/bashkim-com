import { createContext, Dispatch, useContext } from "react";

import { NavigationActionType } from "./actions";
import { NavigationState, NavigationStateInitial } from "./state";

export type NavigationContextType = {
  navigationState: NavigationState;
  navigationDispatch: Dispatch<NavigationActionType>;
};

export const NavigationContext = createContext<NavigationContextType>({
  navigationState: NavigationStateInitial,
  navigationDispatch: () => {
    /* void */
  },
});

export const useNavigation = () => useContext(NavigationContext);
