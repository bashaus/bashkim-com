import { PropsWithChildren } from "react";

import * as S from "./styles";
import { GroupDesign } from "./types";

export type GroupProps = Readonly<
  PropsWithChildren<{
    design?: GroupDesign;
  }>
>;

export default function Group({
  design = GroupDesign.Default,
  children,
}: GroupProps) {
  const Component = S.groupDesignComponentMap[design];
  return (
    <Component component="section" spacing={4} py={8} alignItems="center">
      {children}
    </Component>
  );
}
