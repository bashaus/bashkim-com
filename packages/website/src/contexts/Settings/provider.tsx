import { PropsWithChildren, useMemo, useReducer } from "react";

import SettingsContext from "./context";
import SettingsReducer from "./reducer";
import { settingsStateInitial } from "./state";

export type SettingsProviderProps = Readonly<PropsWithChildren>;

export default function SettingsProvider({ children }: SettingsProviderProps) {
  const [settingsState, settingsDispatch] = useReducer(
    SettingsReducer,
    settingsStateInitial,
  );

  const providerValue = useMemo(
    () => ({ settingsState, settingsDispatch }),
    [settingsState, settingsDispatch],
  );

  return (
    <SettingsContext.Provider value={providerValue}>
      {children}
    </SettingsContext.Provider>
  );
}
