import "client-only";

import { PropsWithChildren } from "react";

import SocialsDrawerView from "./view";
import { useSocialsDrawerViewModel } from "./view-model";

export type SocialsDrawerProps = Readonly<PropsWithChildren>;

export default function SocialsDrawer({ children }: SocialsDrawerProps) {
  const viewModel = useSocialsDrawerViewModel();
  return (
    <SocialsDrawerView viewModel={viewModel}>{children}</SocialsDrawerView>
  );
}
