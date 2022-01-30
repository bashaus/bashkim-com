import {
  ColorGreyscale5,
  GridContainerPadding,
  GridSides,
} from "@bashkim-com/style-guide";
import styled, { css } from "styled-components";

import { GroupDesign } from "./types";

type GroupProps = {
  "props-design": GroupDesign;
};

export const Group = styled.section<GroupProps>`
  ${GridContainerPadding({
    sides: [GridSides.TOP, GridSides.BOTTOM],
  })}

  ${({ "props-design": design }) => {
    if (design === GroupDesign.ALTERNATE) {
      return css`
        background-color: ${ColorGreyscale5};
      `;
    }
  }}
`;
