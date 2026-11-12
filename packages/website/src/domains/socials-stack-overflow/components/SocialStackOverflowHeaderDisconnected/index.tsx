import { StackOverflowFilledVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsHeader from "@bashkim-com/design-system/SocialsHeader";
import Image from "next/image";
import { useTranslations } from "next-intl";

import profilePhoto from "@/assets/photo@4x.jpg";
import { getExternalStackOverflowUrl } from "@/libraries/app/navigation";

export default function SocialStackOverflowHeaderDisconnected() {
  const t = useTranslations("SocialStackOverflowHeaderDisconnected");

  return (
    <SocialsHeader
      href={getExternalStackOverflowUrl()}
      avatarBadgeBackground="#FFF"
      avatarBadge={<StackOverflowFilledVector width={20} height={20} />}
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
