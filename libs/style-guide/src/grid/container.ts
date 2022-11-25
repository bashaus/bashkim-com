import { css } from "styled-components";

import { MediaBreakpoints, MediaBreakpointType } from "../media";
import { GridDesign } from "./design";
import { GridSide } from "./side";

/* */

export type GridContainerCenterOptions = {
  breakpoints?: Array<MediaBreakpointType>;
};

export const GridContainerCenter = ({
  breakpoints = MediaBreakpoints,
}: GridContainerCenterOptions = {}) => css`
  ${breakpoints.map((breakpoint) => {
    const breakpointDesign = GridDesign[breakpoint];
    if (breakpointDesign.gutter) {
      return css`
        @media ${breakpointDesign.query} {
          margin-left: auto;
          margin-right: auto;
        }
      `;
    }

    return css``;
  })}
`;

/* */

export type GridContainerMaxWidthOptions = {
  breakpoints?: Array<MediaBreakpointType>;
};

export const GridContainerMaxWidth = ({
  breakpoints = MediaBreakpoints,
}: GridContainerMaxWidthOptions = {}) => css`
  ${breakpoints.map((breakpoint) => {
    const breakpointDesign = GridDesign[breakpoint];
    if (breakpointDesign.maxWidth) {
      return css`
        @media ${breakpointDesign.query} {
          max-width: ${breakpointDesign.maxWidth};
        }
      `;
    }

    return css``;
  })}
`;

/* */

export type GridContainerGutterOptions = {
  breakpoints?: Array<MediaBreakpointType>;
};

export const GridContainerGutter = ({
  breakpoints = MediaBreakpoints,
}: GridContainerGutterOptions = {}) => css`
  ${breakpoints.map((breakpoint) => {
    const breakpointDesign = GridDesign[breakpoint];
    if (breakpointDesign.gutter) {
      return css`
        @media ${breakpointDesign.query} {
          grid-gap: ${breakpointDesign.gutter};
        }
      `;
    }

    return css``;
  })}
`;

/* */

export type GridContainerMarginOptions = {
  breakpoints?: Array<MediaBreakpointType>;
  sides?: Array<GridSide>;
};

export const GridContainerMargin = ({
  breakpoints = MediaBreakpoints,
  sides = [GridSide.TOP, GridSide.BOTTOM],
}: GridContainerMarginOptions = {}) => css`
  ${breakpoints.map((breakpoint) => {
    const breakpointDesign = GridDesign[breakpoint];
    if (breakpointDesign.margin) {
      return css`
        @media ${breakpointDesign.query} {
          ${sides.includes(GridSide.TOP) &&
          css`
            margin-top: ${breakpointDesign.margin};
          `}

          ${sides.includes(GridSide.LEFT) &&
          css`
            margin-left: ${breakpointDesign.margin};
          `}

          ${sides.includes(GridSide.RIGHT) &&
          css`
            margin-right: ${breakpointDesign.margin};
          `}

          ${sides.includes(GridSide.BOTTOM) &&
          css`
            margin-bottom: ${breakpointDesign.margin};
          `}
        }
      `;
    }

    return css``;
  })}
`;

/* */

export type GridContainerPaddingOptions = {
  breakpoints?: Array<MediaBreakpointType>;
  sides?: Array<GridSide>;
};

export const GridContainerPadding = ({
  breakpoints = MediaBreakpoints,
  sides = [GridSide.LEFT, GridSide.RIGHT],
}: GridContainerPaddingOptions = {}) => css`
  ${breakpoints.map((breakpoint) => {
    const breakpointDesign = GridDesign[breakpoint];
    if (breakpointDesign.gutter) {
      return css`
        @media ${breakpointDesign.query} {
          ${sides.includes(GridSide.TOP) &&
          css`
            padding-top: ${breakpointDesign.margin};
          `}

          ${sides.includes(GridSide.LEFT) &&
          css`
            padding-left: ${breakpointDesign.margin};
          `}

          ${sides.includes(GridSide.RIGHT) &&
          css`
            padding-right: ${breakpointDesign.margin};
          `}

          ${sides.includes(GridSide.BOTTOM) &&
          css`
            padding-bottom: ${breakpointDesign.margin};
          `}
        }
      `;
    }

    return css``;
  })}
`;

/* */

export type GridContainerBoundsOptions = {
  breakpoints?: Array<MediaBreakpointType>;
  margin?: Array<GridSide>;
  padding?: Array<GridSide>;
};

export const GridContainerBounds = ({
  breakpoints,
  margin,
  padding,
}: GridContainerBoundsOptions = {}) => css`
  ${GridContainerCenter({ breakpoints })}
  ${GridContainerMaxWidth({ breakpoints })}
  ${GridContainerGutter({ breakpoints })}
  ${GridContainerMargin({ breakpoints, sides: margin })}
  ${GridContainerPadding({ breakpoints, sides: padding })}
`;

/* */

export type GridContainerOptions = {
  columns?: number;
  breakpoints?: Array<MediaBreakpointType>;
  margin?: Array<GridSide>;
  padding?: Array<GridSide>;
};

export const GridContainer = ({
  columns = 12,
  breakpoints,
  margin,
  padding,
}: GridContainerOptions = {}) => css`
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  ${GridContainerBounds({ breakpoints, margin, padding })}
`;
