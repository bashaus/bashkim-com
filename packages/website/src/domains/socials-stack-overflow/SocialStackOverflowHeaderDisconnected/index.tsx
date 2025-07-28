import { StackOverflowFilledVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsHeader from "@bashkim-com/design-system/SocialsHeader";
import Image from "next/image";

import profilePhoto from "@/assets/photo@4x.jpg";

export default function SocialStackOverflowHeaderDisconnected() {
  return (
    <SocialsHeader
      href="https://stackoverflow.com/users/600240/bashaus"
      avatarBadgeBackground="#FFF"
      avatarBadge={<StackOverflowFilledVector width={20} height={20} />}
      avatarImage={<Image {...profilePhoto} alt="Photo of Bashkim Isai" />}
      textPrimary="Bashkim Isai"
      textSecondary="View on Stack Overflow"
    />
  );
}
