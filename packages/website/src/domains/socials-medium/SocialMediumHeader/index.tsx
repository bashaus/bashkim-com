"use client";

import { MediumVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsHeader from "@bashkim-com/design-system/SocialsHeader";
import Image from "next/image";

import profilePhoto from "@/assets/photo@4x.jpg";

export default function SocialMediumHeader() {
  return (
    <SocialsHeader
      href="https://medium.com/@bashaus"
      avatarBadgeBackground="#000"
      avatarBadge={<MediumVector width={10} height={10} color="#FFFFFF" />}
      avatarImage={
        <Image
          src={profilePhoto.src}
          width={profilePhoto.width}
          height={profilePhoto.height}
          alt="Photo of Bashkim Isai"
        />
      }
      textPrimary="Bashkim Isai"
      textSecondary="View profile on Medium"
    />
  );
}
