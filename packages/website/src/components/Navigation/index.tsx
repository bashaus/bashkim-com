import { Navigation as DSNavigation } from "@bashkim-com/design-system";

import { HeaderDesktopSocial } from "../HeaderDesktopSocial";
import { NavigationPrimary } from "../NavigationPrimary";

export const Navigation = () => (
  <DSNavigation>
    <NavigationPrimary />
    <HeaderDesktopSocial />
  </DSNavigation>
);
