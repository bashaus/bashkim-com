import SocialMenuStackOverflowView from "./view";
import { useSocialMenuStackOverflowViewModel } from "./view-model";

export default function SocialMenuStackOverflow() {
  const viewModel = useSocialMenuStackOverflowViewModel();
  return <SocialMenuStackOverflowView viewModel={viewModel} />;
}
