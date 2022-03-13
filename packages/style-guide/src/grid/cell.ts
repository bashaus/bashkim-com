import { css } from "styled-components";

import { MediaBreakpoints, MediaBreakpointType } from "../media";
import { GridDesign } from "./design";
import { GridSide } from "./side";

export type GridCellPaddingOptions = {
  breakpoints?: Array<MediaBreakpointType>;
  sides: Array<GridSide>;
};

/**
 * Helper method to add half of the gutter to a cell
 */
export const GridCellPadding = ({
  breakpoints = MediaBreakpoints,
  sides = [GridSide.TOP, GridSide.LEFT, GridSide.RIGHT, GridSide.BOTTOM],
}: GridCellPaddingOptions) => css`
  ${breakpoints.map((breakpoint) => {
    const breakpointDesign = GridDesign[breakpoint];
    return css`
      @media ${breakpointDesign.query} {
        ${sides.includes(GridSide.TOP) &&
        css`
          padding-top: calc(${breakpointDesign.gutter} / 2);
        `}

        ${sides.includes(GridSide.LEFT) &&
        css`
          padding-left: calc(${breakpointDesign.gutter} / 2);
        `}

        ${sides.includes(GridSide.RIGHT) &&
        css`
          padding-right: calc(${breakpointDesign.gutter} / 2);
        `}

        ${sides.includes(GridSide.BOTTOM) &&
        css`
          padding-bottom: calc(${breakpointDesign.gutter} / 2);
        `}
      }
    `;
  })}
`;

export type GridCellSpanOptions = {
  columns: Record<MediaBreakpointType, number>;
};

export const GridCellSpan = ({ columns }: GridCellOptions) => css`
  ${Object.entries(columns).map(
    ([breakpoint, span]) => css`
      @media ${GridDesign[breakpoint as MediaBreakpointType].query} {
        grid-column: span ${span};
      }
    `
  )}
`;

export type GridCellOptions = Pick<GridCellSpanOptions, "columns">;

export const GridCell = ({ columns }: GridCellOptions) => css`
  ${GridCellSpan({ columns })}
`;
