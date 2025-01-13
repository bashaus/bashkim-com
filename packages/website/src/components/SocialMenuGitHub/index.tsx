import SocialMenuGitHubView from "./view";
import { useSocialMenuGitHubViewModel } from "./view-model";

export default function SocialMenuGitHub() {
  const viewModel = useSocialMenuGitHubViewModel();
  return <SocialMenuGitHubView viewModel={viewModel} />;
}
