import { getMediumSocials } from "@bashkim-com/socials";

import SocialModalMedium from "../../../../domains/socials-medium/SocialModalMedium";

export const dynamic = "force-dynamic";

export default async function SocialModalsSlotMedium() {
  const { articles } = await getMediumSocials();
  return <SocialModalMedium articles={articles} />;
}
