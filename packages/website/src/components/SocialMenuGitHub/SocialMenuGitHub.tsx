import { SocialMenuGitHubView } from "./SocialMenuGitHub.view";
import { useSocialMenuGitHubViewModel } from "./SocialMenuGitHub.viewModel";

export const SocialMenuGitHub = () => {
  const viewModel = useSocialMenuGitHubViewModel();
  return <SocialMenuGitHubView viewModel={viewModel} />;
};
