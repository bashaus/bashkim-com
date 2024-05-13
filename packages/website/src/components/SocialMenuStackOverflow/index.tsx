import { SocialMenuStackOverflowView } from "./view";
import { useSocialMenuStackOverflowViewModel } from "./view-model";

export const SocialMenuStackOverflow = () => {
  const viewModel = useSocialMenuStackOverflowViewModel();
  return <SocialMenuStackOverflowView viewModel={viewModel} />;
};
