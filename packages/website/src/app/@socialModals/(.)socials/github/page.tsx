import { getGitHubSocials } from "@bashkim-com/socials";

import SocialModalGitHub from "../../../../components/SocialModalGitHub";

export const dynamic = "force-dynamic";

export default async function SocialModalsSlotGitHub() {
  const { pinnedItems } = await getGitHubSocials();
  return <SocialModalGitHub pinnedItems={pinnedItems} />;
}
