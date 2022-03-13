import { css } from "styled-components";

import { MediaBreakpoints, MediaBreakpointType } from "../media";
import {
  GridContainerMargin,
  GridContainerMaxWidth,
  GridContainerPadding,
} from "./container";
import { GridDesign } from "./design";
import { GridSide } from "./side";

export type GridFullOptions = {
  breakpoints?: Array<MediaBreakpointType>;
  margin?: Array<GridSide>;
  padding?: Array<GridSide>;
};

export const GridFull = ({
  breakpoints = MediaBreakpoints,
  margin = [GridSide.LEFT, GridSide.RIGHT],
  padding = [GridSide.TOP, GridSide.BOTTOM],
}: GridFullOptions = {}) => css`
  ${GridContainerMaxWidth({ breakpoints })}
  ${GridContainerMargin({ breakpoints, sides: margin })}
  ${GridContainerPadding({ breakpoints, sides: padding })}

  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export type GridFullPaddingOptions = {
  breakpoints?: Array<MediaBreakpointType>;
  sides?: Array<GridSide>;
};

export const GridFullPadding = ({
  breakpoints = MediaBreakpoints,
  sides = [GridSide.TOP, GridSide.LEFT, GridSide.RIGHT, GridSide.BOTTOM],
}: GridFullPaddingOptions = {}) => css`
  ${breakpoints.map((breakpoint) => {
    const BreakpointDesign = GridDesign[breakpoint];

    return css`
      @media ${BreakpointDesign.query} {
        ${sides.includes(GridSide.TOP) &&
        css`
          padding-top: ${BreakpointDesign.margin};
        `}

        ${sides.includes(GridSide.LEFT) &&
        css`
          padding-left: ${BreakpointDesign.margin};
        `}

        ${sides.includes(GridSide.RIGHT) &&
        css`
          padding-right: ${BreakpointDesign.margin};
        `}

        ${sides.includes(GridSide.BOTTOM) &&
        css`
          padding-bottom: ${BreakpointDesign.margin};
        `}
      }
    `;
  })}
`;
