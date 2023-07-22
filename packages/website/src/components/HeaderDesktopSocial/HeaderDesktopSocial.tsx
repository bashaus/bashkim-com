import { NavigationGroup } from "@bashkim-com/design-system";

import { SocialMenuGitHub } from "../SocialMenuGitHub/SocialMenuGitHub";
import { SocialMenuLinkedIn } from "../SocialMenuLinkedIn/SocialMenuLinkedIn";
import { SocialMenuMedium } from "../SocialMenuMedium/SocialMenuMedium";
import { SocialMenuStackOverflow } from "../SocialMenuStackOverflow/SocialMenuStackOverflow";

export const HeaderDesktopSocial = () => (
  <NavigationGroup>
    <SocialMenuGitHub />
    <SocialMenuMedium />
    <SocialMenuStackOverflow />
    <SocialMenuLinkedIn />
  </NavigationGroup>
);
