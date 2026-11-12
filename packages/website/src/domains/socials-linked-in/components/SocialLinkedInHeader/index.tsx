"use client";

import { LinkedInVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsHeader from "@bashkim-com/design-system/SocialsHeader";
import Image from "next/image";
import { useTranslations } from "next-intl";

import profilePhoto from "@/assets/photo@4x.jpg";
import { getExternalLinkedInUrl } from "@/libraries/app/navigation";

export default function SocialLinkedInHeader() {
  const t = useTranslations("SocialLinkedInHeader");

  return (
    <SocialsHeader
      href={getExternalLinkedInUrl()}
      avatarBadgeBackground="#0077B5"
      avatarBadge={<LinkedInVector width={10} height={10} color="#FFFFFF" />}
      avatarImage={
        <Image
          src={profilePhoto.src}
          width={profilePhoto.width}
          height={profilePhoto.height}
          alt={t("profilePhotoAlt")}
        />
      }
      textPrimary={t("title")}
      textSecondary={t("subtitle")}
    />
  );
}
