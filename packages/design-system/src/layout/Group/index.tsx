import { ComponentPropsWithRef } from "react";

import * as S from "./styles";
import { GroupDesign } from "./types";

export { GroupDesign };

export type GroupProps = ComponentPropsWithRef<"div"> & {
  design?: GroupDesign;
};

export const Group = ({
  design = GroupDesign.DEFAULT,
  ...props
}: GroupProps) => <S.Group data-props-design={design} {...props} />;
