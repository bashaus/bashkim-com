import { PropsWithChildren, useMemo, useReducer } from "react";

import SiteSettingsContext from "./context";
import SiteSettingsReducer from "./reducer";
import { siteSettingsStateInitial } from "./state";

export type SiteSettingsProviderProps = Readonly<PropsWithChildren>;

export default function SiteSettingsProvider({
  children,
}: SiteSettingsProviderProps) {
  const [siteSettingsState, siteSettingsDispatch] = useReducer(
    SiteSettingsReducer,
    siteSettingsStateInitial,
  );

  const providerValue = useMemo(
    () => ({ siteSettingsState, siteSettingsDispatch }),
    [siteSettingsState, siteSettingsDispatch],
  );

  return (
    <SiteSettingsContext.Provider value={providerValue}>
      {children}
    </SiteSettingsContext.Provider>
  );
}
