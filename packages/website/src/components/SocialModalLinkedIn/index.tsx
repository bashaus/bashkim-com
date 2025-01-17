"use client";

import LinkedInVector from "../../assets/vectors/social/linked-in.svg";
import SocialDrawer from "../SocialDrawer";
import SocialHeader from "../SocialHeader";

export default function SocialModalLinkedIn() {
  return (
    <SocialDrawer>
      <SocialHeader
        href="https://www.linkedin.com/in/bashaus/"
        avatarBadgeBackground="#0077B5"
        avatarBadge={
          <LinkedInVector
            width={10}
            height={10}
            viewBox="0 0 100 100"
            color="#FFFFF"
          />
        }
        textPrimary="Bashkim Isai"
        textSecondary="View LinkedIn profile"
      />
    </SocialDrawer>
  );
}
