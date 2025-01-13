import Cookie from "js-cookie";
import { ReactNode, useEffect, useMemo, useReducer } from "react";

import { SettingsActionSetAppearance } from "./actions";
import SettingsContext from "./context";
import SettingsReducer from "./reducer";
import { settingsStateInitial } from "./state";

export type SettingsProviderProps = {
  children: ReactNode;
};

export default function SettingsProvider({ children }: SettingsProviderProps) {
  const [settingsState, settingsDispatch] = useReducer(
    SettingsReducer,
    settingsStateInitial,
  );

  const { appearance } = settingsState;

  useEffect(() => {
    if (typeof document === typeof undefined) {
      return;
    }

    const appearanceCookie = Cookie.get("appearance");
    if (!appearanceCookie) {
      return;
    }

    settingsDispatch(
      SettingsActionSetAppearance({ appearance: appearanceCookie }),
    );
  }, []);

  useEffect(() => {
    if (typeof document === typeof undefined) {
      return;
    }

    if (!appearance) {
      document.documentElement.removeAttribute("data-appearance");
      Cookie.remove("appearance");
      return;
    }
    document.documentElement.setAttribute("data-appearance", appearance);
    Cookie.set("appearance", appearance);
  }, [appearance]);

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
