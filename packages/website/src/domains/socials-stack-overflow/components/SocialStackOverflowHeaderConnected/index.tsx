import { StackOverflowFilledVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsHeader from "@bashkim-com/design-system/SocialsHeader";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { useTranslations } from "next-intl";

import profilePhoto from "@/assets/photo@4x.jpg";
import { getExternalStackOverflowUrl } from "@/libraries/app/navigation";

import * as S from "./styles";

export type SocialStackOverflowHeaderConnectedProps = Readonly<{
  reputation: number;
  goldBadgeCount?: number;
  silverBadgeCount?: number;
  bronzeBadgeCount?: number;
}>;

export default function SocialStackOverflowHeaderConnected({
  reputation,
  goldBadgeCount,
  silverBadgeCount,
  bronzeBadgeCount,
}: SocialStackOverflowHeaderConnectedProps) {
  const t = useTranslations("SocialStackOverflowHeaderConnected");

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
      textSecondary={
        <Stack direction="row" spacing={2} component="span">
          <span>{reputation}</span>

          {goldBadgeCount && (
            <S.GoldBadgeChip>&#9679; {goldBadgeCount}</S.GoldBadgeChip>
          )}

          {silverBadgeCount && (
            <S.SilverBadgeChip>&#9679; {silverBadgeCount}</S.SilverBadgeChip>
          )}

          {bronzeBadgeCount && (
            <S.BronzeBadgeChip>&#9679; {bronzeBadgeCount}</S.BronzeBadgeChip>
          )}
        </Stack>
      }
    />
  );
}
