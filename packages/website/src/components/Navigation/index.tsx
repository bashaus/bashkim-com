import { Navigation as DSNavigation } from "@bashkim-com/design-system";

import HeaderDesktopSocial from "../HeaderDesktopSocial";
import NavigationPrimary from "../NavigationPrimary";

export default function Navigation() {
  return (
    <DSNavigation>
      <NavigationPrimary />
      <HeaderDesktopSocial />
    </DSNavigation>
  );
}
