import { NavigationGroup } from "@bashkim-com/design-system";

import { SocialMenuGitHub } from "../SocialMenuGitHub";
import { SocialMenuLinkedIn } from "../SocialMenuLinkedIn";
import { SocialMenuMedium } from "../SocialMenuMedium";
import { SocialMenuStackOverflow } from "../SocialMenuStackOverflow";

export const HeaderDesktopSocial = () => (
  <NavigationGroup>
    <SocialMenuGitHub />
    <SocialMenuMedium />
    <SocialMenuStackOverflow />
    <SocialMenuLinkedIn />
  </NavigationGroup>
);
