import { SocialMenuMediumView } from "./view";
import { useSocialMenuMediumViewModel } from "./view-model";

export const SocialMenuMedium = () => {
  const viewModel = useSocialMenuMediumViewModel();
  return <SocialMenuMediumView viewModel={viewModel} />;
};
