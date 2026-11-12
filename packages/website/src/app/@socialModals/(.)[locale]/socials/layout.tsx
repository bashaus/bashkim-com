"use client";

import { PropsWithChildren } from "react";

import SocialsDrawer from "@/domains/socials/components/SocialsDrawer";

export type SocialModalsLayoutProps = Readonly<PropsWithChildren>;

export default function SocialModalsLayout({
  children,
}: SocialModalsLayoutProps) {
  return <SocialsDrawer>{children}</SocialsDrawer>;
}
