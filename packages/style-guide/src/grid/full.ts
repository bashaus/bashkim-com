import { css } from "styled-components";

import { MediaBreakpoints, MediaBreakpointType } from "../media";
import {
  GridContainerMargin,
  GridContainerMaxWidth,
  GridContainerPadding,
} from "./container";
import { GridDesign } from "./design";
import { GridSides } from "./sides";

export type GridFullOptions = {
  breakpoints?: Array<MediaBreakpointType>;
  margin?: Array<GridSides>;
  padding?: Array<GridSides>;
};

export const GridFull = ({
  breakpoints = MediaBreakpoints,
  margin = [GridSides.LEFT, GridSides.RIGHT],
  padding = [GridSides.TOP, GridSides.BOTTOM],
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
  sides?: Array<GridSides>;
};

export const GridFullPadding = ({
  breakpoints = MediaBreakpoints,
  sides = [GridSides.TOP, GridSides.LEFT, GridSides.RIGHT, GridSides.BOTTOM],
}: GridFullPaddingOptions = {}) => css`
  ${breakpoints.map((breakpoint) => {
    const BreakpointDesign = GridDesign[breakpoint];

    return css`
      @media ${BreakpointDesign.query} {
        ${sides.includes(GridSides.TOP) &&
        css`
          padding-top: ${BreakpointDesign.margin};
        `}

        ${sides.includes(GridSides.LEFT) &&
        css`
          padding-left: ${BreakpointDesign.margin};
        `}

        ${sides.includes(GridSides.RIGHT) &&
        css`
          padding-right: ${BreakpointDesign.margin};
        `}

        ${sides.includes(GridSides.BOTTOM) &&
        css`
          padding-bottom: ${BreakpointDesign.margin};
        `}
      }
    `;
  })}
`;
