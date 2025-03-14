import { PropsWithChildren } from "react";

import SocialDrawer from "@/domains/socials/SocialDrawer";

export type SocialModalsLayoutProps = Readonly<PropsWithChildren>;

export default function SocialModalsLayout({
  children,
}: SocialModalsLayoutProps) {
  return <SocialDrawer>{children}</SocialDrawer>;
}
