"use client";

import { GitHubVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsHeader from "@bashkim-com/design-system/SocialsHeader";
import Image from "next/image";

import profilePhoto from "@/assets/photo@4x.jpg";

export default function SocialGitHubHeader() {
  return (
    <SocialsHeader
      href="https://github.com/bashaus/"
      avatarBadgeBackground="#333"
      avatarBadge={<GitHubVector width={15} height={15} color="#FFFFFF" />}
      avatarImage={<Image {...profilePhoto} alt="Photo of Bashkim Isai" />}
      textPrimary="@bashaus"
      textSecondary="View profile on GitHub"
    />
  );
}
