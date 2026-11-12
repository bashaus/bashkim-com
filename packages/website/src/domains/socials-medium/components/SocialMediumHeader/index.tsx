"use client";

import { MediumVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsHeader from "@bashkim-com/design-system/SocialsHeader";
import Image from "next/image";
import { useTranslations } from "next-intl";

import profilePhoto from "@/assets/photo@4x.jpg";
import { getExternalMediumUrl } from "@/libraries/app/navigation";

export default function SocialMediumHeader() {
  const t = useTranslations("SocialMediumHeader");

  return (
    <SocialsHeader
      href={getExternalMediumUrl()}
      avatarBadgeBackground="#000"
      avatarBadge={<MediumVector width={10} height={10} color="#FFFFFF" />}
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
