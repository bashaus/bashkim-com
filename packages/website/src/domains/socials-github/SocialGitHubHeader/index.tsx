"use client";

import { GitHubVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsHeader from "@bashkim-com/design-system/SocialsHeader";

export default function SocialGitHubHeader() {
  return (
    <SocialsHeader
      href="https://github.com/bashaus/"
      avatarBadgeBackground="#333"
      avatarBadge={<GitHubVector width={15} height={15} color="#FFFFFF" />}
      textPrimary="@bashaus"
      textSecondary="View profile on GitHub"
    />
  );
}
