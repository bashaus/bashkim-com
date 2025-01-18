"use client";

import { PropsWithChildren } from "react";

import SocialDrawerView from "./view";
import { useSocialDrawerViewModal } from "./view-model";

export type SocialDrawerProps = PropsWithChildren;

export default function SocialDrawer({ children }: SocialDrawerProps) {
  const viewModel = useSocialDrawerViewModal();
  return <SocialDrawerView viewModel={viewModel}>{children}</SocialDrawerView>;
}
