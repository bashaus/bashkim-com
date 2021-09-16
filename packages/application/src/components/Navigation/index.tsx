import { Navigation as DesignNavigation } from "@bashkim-com/design-system";

import { NavigationPrimary } from "%components/NavigationPrimary";
import { NavigationSocial } from "%components/NavigationSocial";

export const Navigation = (): JSX.Element => (
  <DesignNavigation>
    <NavigationPrimary />
    <NavigationSocial />
  </DesignNavigation>
);
