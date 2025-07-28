import { StackOverflowFilledVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsHeader from "@bashkim-com/design-system/SocialsHeader";

export default function SocialStackOverflowHeaderDisconnected() {
  return (
    <SocialsHeader
      href="https://stackoverflow.com/users/600240/bashaus"
      avatarBadgeBackground="#FFF"
      avatarBadge={<StackOverflowFilledVector width={20} height={20} />}
      textPrimary="Bashkim Isai"
      textSecondary="View on Stack Overflow"
    />
  );
}
