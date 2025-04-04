import { styled } from "@mui/material/styles";
import { ComponentPropsWithRef, ComponentType } from "react";

import { HeaderIntersectionVariant } from "./interfaces";

export const Fixed = styled("div")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: 60,
  width: 1,
  visibility: "hidden",
}));

export const Sticky = styled("div")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "calc(100vh - 60px)",
  width: 1,
  visibility: "hidden",
}));

export const variantCompanyMap: Record<
  keyof HeaderIntersectionVariant,
  ComponentType<ComponentPropsWithRef<"div">>
> = {
  fixed: Fixed,
  sticky: Sticky,
};
