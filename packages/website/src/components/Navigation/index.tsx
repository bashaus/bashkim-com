import { Navigation as DSNavigation } from "@bashkim-com/design-system";

import HeaderDesktopSocial from "@/components/HeaderDesktopSocial";
import NavigationPrimary from "@/components/NavigationPrimary";

export default function Navigation() {
  return (
    <DSNavigation>
      <NavigationPrimary />
      <HeaderDesktopSocial />
    </DSNavigation>
  );
}
