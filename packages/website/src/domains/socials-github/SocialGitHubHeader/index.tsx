import GitHubVector from "@/assets/vectors/social/github.svg";
import SocialHeader from "@/domains/socials/SocialHeader";

export default function SocialGitHubHeader() {
  return (
    <SocialHeader
      href="https://github.com/bashaus/"
      avatarBadgeBackground="#333"
      avatarBadge={<GitHubVector width={15} height={15} color="#FFFFFF" />}
      textPrimary="@bashaus"
      textSecondary="View profile on GitHub"
    />
  );
}
