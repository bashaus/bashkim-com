import LinkedInVector from "../../assets/vectors/social/LinkedIn.svg";
import LinkedInOutlinedVector from "../../assets/vectors/social/LinkedInOutlined.svg";
import SocialMenu from "../SocialMenu";
import SocialMenuItemHeader from "../SocialMenuItemHeader";

export default function SocialMenuLinkedIn() {
  return (
    <SocialMenu
      label="LinkedIn"
      signifierIcon={
        <LinkedInOutlinedVector width={30} height={30} viewBox="0 0 100 100" />
      }
    >
      <SocialMenuItemHeader
        href="https://www.linkedin.com/in/bashaus/"
        avatarBadgeBackground="#0077B5"
        avatarBadge={
          <LinkedInVector
            width={10}
            height={10}
            viewBox="0 0 100 100"
            color="#FFFFF"
          />
        }
        textPrimary="Bashkim Isai"
        textSecondary="View LinkedIn profile"
      />
    </SocialMenu>
  );
}
