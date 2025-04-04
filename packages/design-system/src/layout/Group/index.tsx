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
  children,
  design = "default",
  id,
}: GroupProps) {
  const Component = S.groupDesignComponentMap[design];

  return (
    <Component
      component="section"
      alignItems="center"
      id={id}
      py={8}
      spacing={4}
    >
      {children}
    </Component>
  );
}

export { type GroupDesign };
