import { SocialMenuMediumView } from "./SocialMenuMedium.view";
import { useSocialMenuMediumViewModel } from "./SocialMenuMedium.viewModel";

export const SocialMenuMedium = () => {
  const viewModel = useSocialMenuMediumViewModel();
  return <SocialMenuMediumView viewModel={viewModel} />;
};
