"use client";

import { PropsWithChildren } from "react";

import SocialDrawerView from "./view";
import { useSocialDrawerViewModel } from "./view-model";

export type SocialDrawerProps = Readonly<PropsWithChildren>;

export default function SocialDrawer({ children }: SocialDrawerProps) {
  const viewModel = useSocialDrawerViewModel();
  return <SocialDrawerView viewModel={viewModel}>{children}</SocialDrawerView>;
}
