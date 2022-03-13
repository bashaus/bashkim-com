import { HTMLAttributes } from "react";

import * as S from "./styles";
import { GroupDesign } from "./types";

export { GroupDesign };

export type GroupProps = HTMLAttributes<HTMLDivElement> & {
  design?: GroupDesign;
};

export const Group = ({
  design = GroupDesign.DEFAULT,
  ...props
}: GroupProps) => <S.Group data-props-design={design} {...props} />;
