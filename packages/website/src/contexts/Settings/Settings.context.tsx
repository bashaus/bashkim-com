import { createContext, Dispatch, useContext } from "react";

import { SettingsActionType } from "./Settings.actions";
import { SettingsState, settingsStateInitial } from "./Settings.state";

export type SettingsContextType = {
  settingsState: SettingsState;
  settingsDispatch: Dispatch<SettingsActionType>;
};

export const SettingsContext = createContext<SettingsContextType>({
  settingsState: settingsStateInitial,
  settingsDispatch: () => {
    /* void */
  },
});

export const useSettings = () => useContext(SettingsContext);
