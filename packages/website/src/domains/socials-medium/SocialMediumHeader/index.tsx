"use client";

import { MediumVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsHeader from "@bashkim-com/design-system/SocialsHeader";

export default function SocialMediumHeader() {
  return (
    <SocialsHeader
      href="https://medium.com/@bashaus"
      avatarBadgeBackground="#000"
      avatarBadge={<MediumVector width={10} height={10} color="#FFFFFF" />}
      textPrimary="Bashkim Isai"
      textSecondary="View profile on Medium"
    />
  );
}
