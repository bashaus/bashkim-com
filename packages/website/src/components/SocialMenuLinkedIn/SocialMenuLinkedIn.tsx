import LinkedInVector from "../../assets/vectors/social/LinkedIn.svg";
import LinkedInOutlinedVector from "../../assets/vectors/social/LinkedInOutlined.svg";
import { SocialMenu } from "../SocialMenu/SocialMenu";
import { SocialMenuItemHeader } from "../SocialMenuItemHeader/SocialMenuItemHeader";

export const SocialMenuLinkedIn = () => {
  return (
    <SocialMenu
      label="LinkedIn"
      signifierIcon={<LinkedInOutlinedVector width="30" height="30" />}
    >
      <SocialMenuItemHeader
        href="https://www.linkedin.com/in/bashaus/"
        avatarBadgeBackground="#0077B5"
        avatarBadge={<LinkedInVector width="10" height="10" color="#FFFFF" />}
        textPrimary="Bashkim Isai"
        textSecondary="View LinkedIn profile"
      />
    </SocialMenu>
  );
};
