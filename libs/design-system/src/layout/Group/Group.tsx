import { ComponentPropsWithoutRef } from "react";

import * as S from "./Group.styles";
import { GroupDesign } from "./Group.types";

export { GroupDesign };

export type GroupProps = ComponentPropsWithoutRef<"div"> & {
  design?: GroupDesign;
};

export const Group = ({
  design = GroupDesign.DEFAULT,
  ...props
}: GroupProps) => <S.Group data-props-design={design} {...props} />;
