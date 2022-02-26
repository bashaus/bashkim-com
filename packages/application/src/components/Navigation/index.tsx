import { Navigation as DSNavigation } from "@bashkim-com/design-system";

import { NavigationPrimary } from "%components/NavigationPrimary";
import { NavigationSocial } from "%components/NavigationSocial";

export const Navigation = () => (
  <DSNavigation>
    <NavigationPrimary />
    <NavigationSocial />
  </DSNavigation>
);
