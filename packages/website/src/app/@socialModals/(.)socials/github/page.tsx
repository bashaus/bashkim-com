import { getGitHubSocials } from "@bashkim-com/socials";

import SocialGitHub from "../../../../domains/socials-github/SocialGitHub";

export const dynamic = "force-dynamic";

export default async function SocialModalsSlotGitHub() {
  const { pinnedItems, repositoryCount } = await getGitHubSocials();
  return (
    <SocialGitHub pinnedItems={pinnedItems} repositoryCount={repositoryCount} />
  );
}
