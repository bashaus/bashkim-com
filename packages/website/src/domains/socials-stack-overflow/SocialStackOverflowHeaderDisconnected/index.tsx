import StackOverflowFilledVector from "@/assets/vectors/social/stack-overflow-filled.svg";
import SocialHeader from "@/domains/socials/components/SocialHeader";

export default function SocialStackOverflowHeaderDisconnected() {
  return (
    <SocialHeader
      href="https://stackoverflow.com/users/600240/bashaus"
      avatarBadgeBackground="#FFF"
      avatarBadge={<StackOverflowFilledVector width={20} height={20} />}
      textPrimary="Bashkim Isai"
      textSecondary="View on Stack Overflow"
    />
  );
}
