import { PropsWithChildren } from "react";

import * as S from "./styles";
import { GroupDesign } from "./types";

export type GroupProps = Readonly<
  PropsWithChildren<{
    design?: keyof GroupDesign;
    id?: string;
  }>
>;

export default function Group({
  design = "default",
  children,
  id,
}: GroupProps) {
  const Component = S.groupDesignComponentMap[design];

  return (
    <Component
      id={id}
      component="section"
      spacing={4}
      py={8}
      alignItems="center"
    >
      {children}
    </Component>
  );
}

export { type GroupDesign };
