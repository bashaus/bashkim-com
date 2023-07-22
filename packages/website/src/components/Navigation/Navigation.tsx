import { Navigation as DSNavigation } from "@bashkim-com/design-system";

import { HeaderDesktopSocial } from "../HeaderDesktopSocial/HeaderDesktopSocial";
import { NavigationPrimary } from "../NavigationPrimary/NavigationPrimary";

export const Navigation = () => (
  <DSNavigation>
    <NavigationPrimary />
    <HeaderDesktopSocial />
  </DSNavigation>
);
