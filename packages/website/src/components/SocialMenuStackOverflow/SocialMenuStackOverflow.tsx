import { SocialMenuStackOverflowView } from "./SocialMenuStackOverflow.view";
import { useSocialMenuStackOverflowViewModel } from "./SocialMenuStackOverflow.viewModel";

export const SocialMenuStackOverflow = () => {
  const viewModel = useSocialMenuStackOverflowViewModel();
  return <SocialMenuStackOverflowView viewModel={viewModel} />;
};
