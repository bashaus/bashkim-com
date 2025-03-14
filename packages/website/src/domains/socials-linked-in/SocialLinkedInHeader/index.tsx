"use client";

import LinkedInVector from "@/assets/vectors/social/linked-in.svg";
import SocialHeader from "@/domains/socials/SocialHeader";

export default function SocialLinkedInHeader() {
  return (
    <SocialHeader
      href="https://www.linkedin.com/in/bashaus/"
      avatarBadgeBackground="#0077B5"
      avatarBadge={<LinkedInVector width={10} height={10} color="#FFFFFF" />}
      textPrimary="Bashkim Isai"
      textSecondary="View LinkedIn profile"
    />
  );
}
