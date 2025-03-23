import { ReactNode } from "react";

import HeaderDesktop from "@/components/HeaderDesktop";
import { type HeaderDesktopVariant } from "@/components/HeaderDesktop/interfaces";
import HeaderIntersection from "@/components/HeaderIntersection";
import HeaderMobile from "@/components/HeaderMobile";

export type HeaderProps = Readonly<{
  variant?: keyof HeaderDesktopVariant;
  backButton?: ReactNode;
}>;

export default function Header({ backButton, variant = "glass" }: HeaderProps) {
  return (
    <>
      <HeaderIntersection />
      <HeaderMobile backButton={backButton} />
      <HeaderDesktop variant={variant} />
    </>
  );
}
