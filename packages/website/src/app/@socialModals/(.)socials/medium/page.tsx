import { getMediumSocials } from "@bashkim-com/socials";

import SocialMedium from "@/domains/socials-medium/SocialMedium";

export const dynamic = "force-dynamic";

export default async function SocialModalsSlotMedium() {
  const { articles } = await getMediumSocials();

  return <SocialMedium articles={articles} />;
}
