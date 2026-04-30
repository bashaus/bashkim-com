"use client";

import { GitHubVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsHeader from "@bashkim-com/design-system/SocialsHeader";
import Image from "next/image";

import profilePhoto from "@/assets/photo@4x.jpg";
import { getExternalGitHubUrl } from "@/libraries/app/navigation";

export default function SocialGitHubHeader() {
  return (
    <SocialsHeader
      href={getExternalGitHubUrl()}
      avatarBadgeBackground="#333"
      avatarBadge={<GitHubVector width={15} height={15} color="#FFFFFF" />}
      avatarImage={
        <Image
          src={profilePhoto.src}
          width={profilePhoto.width}
          height={profilePhoto.height}
          alt="Photo of Bashkim Isai"
        />
      }
      textPrimary="@bashaus"
      textSecondary="View profile on GitHub"
    />
  );
}
