import SocialMenuMediumView from "./view";
import { useSocialMenuMediumViewModel } from "./view-model";

export default function SocialMenuMedium() {
  const viewModel = useSocialMenuMediumViewModel();
  return <SocialMenuMediumView viewModel={viewModel} />;
}
