import {
  ColorShadeBackground,
  ColorShadeForeground,
  DesignPageBackgroundColor,
  DesignPageForegroundColor,
  GridContainerPadding,
  GridSide,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

import { GroupDesign } from "./Group.types";

export const Group = styled.section`
  ${GridContainerPadding({
    sides: [GridSide.TOP, GridSide.BOTTOM],
  })}

  &[data-props-design="${GroupDesign.DEFAULT}"] {
    background-color: ${DesignPageBackgroundColor};
    color: ${DesignPageForegroundColor};
  }

  &[data-props-design="${GroupDesign.ALTERNATE}"] {
    background-color: ${ColorShadeBackground};
    color: ${ColorShadeForeground};
  }
`;
