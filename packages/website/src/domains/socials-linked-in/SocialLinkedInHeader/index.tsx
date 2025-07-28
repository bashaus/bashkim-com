"use client";

import { LinkedInVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsHeader from "@bashkim-com/design-system/SocialsHeader";

export default function SocialLinkedInHeader() {
  return (
    <SocialsHeader
      href="https://www.linkedin.com/in/bashaus/"
      avatarBadgeBackground="#0077B5"
      avatarBadge={<LinkedInVector width={10} height={10} color="#FFFFFF" />}
      textPrimary="Bashkim Isai"
      textSecondary="View LinkedIn profile"
    />
  );
}
