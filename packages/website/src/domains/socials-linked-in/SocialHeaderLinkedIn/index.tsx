"use client";

import LinkedInVector from "../../../assets/vectors/social/linked-in.svg";
import SocialHeader from "../../socials/SocialHeader";

export default function SocialHeaderLinkedIn() {
  return (
    <SocialHeader
      href="https://www.linkedin.com/in/bashaus/"
      avatarBadgeBackground="#0077B5"
      avatarBadge={<LinkedInVector width={10} height={10} color="#FFFFF" />}
      textPrimary="Bashkim Isai"
      textSecondary="View LinkedIn profile"
    />
  );
}
