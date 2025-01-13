import { NavigationGroup } from "@bashkim-com/design-system";

import SocialMenuGitHub from "../SocialMenuGitHub";
import SocialMenuLinkedIn from "../SocialMenuLinkedIn";
import SocialMenuMedium from "../SocialMenuMedium";
import SocialMenuStackOverflow from "../SocialMenuStackOverflow";

export default function HeaderDesktopSocial() {
  return (
    <NavigationGroup>
      <SocialMenuGitHub />
      <SocialMenuMedium />
      <SocialMenuStackOverflow />
      <SocialMenuLinkedIn />
    </NavigationGroup>
  );
}
