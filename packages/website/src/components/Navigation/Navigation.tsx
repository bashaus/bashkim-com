import { Navigation as DSNavigation } from "@bashkim-com/design-system";

import { NavigationPrimary } from "../NavigationPrimary/NavigationPrimary";
import { NavigationSocial } from "../NavigationSocial/NavigationSocial";

export const Navigation = () => (
  <DSNavigation>
    <NavigationPrimary />
    <NavigationSocial />
  </DSNavigation>
);
