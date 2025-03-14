import { createContext, Dispatch, useContext } from "react";

import { SiteSettingsActionType } from "./actions";
import { SiteSettingsState, siteSettingsStateInitial } from "./state";

export type SiteSettingsContextType = {
  siteSettingsState: SiteSettingsState;
  siteSettingsDispatch: Dispatch<SiteSettingsActionType>;
};

const SiteSettingsContext = createContext<SiteSettingsContextType>({
  siteSettingsState: siteSettingsStateInitial,
  siteSettingsDispatch: () => {
    /* void */
  },
});

export const useSiteSettings = () => useContext(SiteSettingsContext);

export default SiteSettingsContext;
