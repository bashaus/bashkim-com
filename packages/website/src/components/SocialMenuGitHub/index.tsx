import { SocialMenuGitHubView } from "./view";
import { useSocialMenuGitHubViewModel } from "./view-model";

export const SocialMenuGitHub = () => {
  const viewModel = useSocialMenuGitHubViewModel();
  return <SocialMenuGitHubView viewModel={viewModel} />;
};
