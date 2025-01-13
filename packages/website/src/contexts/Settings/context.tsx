import { createContext, Dispatch, useContext } from "react";

import { SettingsActionType } from "./actions";
import { SettingsState, settingsStateInitial } from "./state";

export type SettingsContextType = {
  settingsState: SettingsState;
  settingsDispatch: Dispatch<SettingsActionType>;
};

const SettingsContext = createContext<SettingsContextType>({
  settingsState: settingsStateInitial,
  settingsDispatch: () => {
    /* void */
  },
});

export const useSettings = () => useContext(SettingsContext);

export default SettingsContext;
