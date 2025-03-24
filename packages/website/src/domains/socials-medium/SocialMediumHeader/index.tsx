"use client";

import MediumVector from "@/assets/vectors/social/medium.svg";
import SocialHeader from "@/domains/socials/SocialHeader";

export default function SocialMediumHeader() {
  return (
    <SocialHeader
      href="https://medium.com/@bashaus"
      avatarBadgeBackground="#000"
      avatarBadge={<MediumVector width={10} height={10} color="#FFFFFF" />}
      textPrimary="Bashkim Isai"
      textSecondary="View profile on Medium"
    />
  );
}
