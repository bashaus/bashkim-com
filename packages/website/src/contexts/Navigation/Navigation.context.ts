import { createContext, Dispatch, useContext } from "react";

import { NavigationActionType } from "./Navigation.actions";
import { NavigationState, navigationStateInitial } from "./Navigation.state";

export type NavigationContextType = {
  navigationState: NavigationState;
  navigationDispatch: Dispatch<NavigationActionType>;
};

export const NavigationContext = createContext<NavigationContextType>({
  navigationState: navigationStateInitial,
  navigationDispatch: () => {
    /* void */
  },
});

export const useNavigation = () => useContext(NavigationContext);
