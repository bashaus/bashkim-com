import Stack from "@mui/material/Stack";

import StackOverflowFilledVector from "@/assets/vectors/social/stack-overflow-filled.svg";
import SocialHeader from "@/domains/socials/components/SocialHeader";

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
  return (
    <SocialHeader
      href="https://stackoverflow.com/users/600240/bashaus"
      avatarBadgeBackground="#FFF"
      avatarBadge={<StackOverflowFilledVector width={20} height={20} />}
      textPrimary="Bashkim Isai"
      textSecondary={
        <Stack direction="row" spacing={2} component="span">
          <span>{reputation}</span>

          {goldBadgeCount && <S.BadgesGold>● {goldBadgeCount}</S.BadgesGold>}
          {silverBadgeCount && (
            <S.BadgesSilver>● {silverBadgeCount}</S.BadgesSilver>
          )}
          {bronzeBadgeCount && (
            <S.BadgesBronze>● {bronzeBadgeCount}</S.BadgesBronze>
          )}
        </Stack>
      }
    />
  );
}
