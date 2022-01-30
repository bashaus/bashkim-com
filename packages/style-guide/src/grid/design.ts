import {
  MediaBreakpointType,
  MediaQuery,
  MediaQueryDesktopNarrow,
  MediaQueryDesktopWide,
  MediaQueryMobileLandscape,
  MediaQueryMobilePortrait,
  MediaQueryTabletLandscape,
  MediaQueryTabletPortrait,
} from "../media";

export type GridDesignType = {
  /**
   * The media query for selecting the breakpoint
   */
  query: MediaQuery;

  /**
   * The maximum width of the grid
   * Includes all margins, gutters and column widths
   * SHOULD be in pixels units
   */
  maxWidth?: string;

  /**
   * Amount of space surrounding the grid
   * SHOULD be in pixels units
   */
  margin: string;

  /**
   * Amount of space between each column
   * SHOULD be in pixels units
   */
  gutter: string;
};

export const GridDesign: Record<MediaBreakpointType, GridDesignType> = {
  MobilePortrait: {
    query: MediaQueryMobilePortrait,
    margin: "14px",
    gutter: "16px",
  },
  MobileLandscape: {
    query: MediaQueryMobileLandscape,
    margin: "20px",
    gutter: "20px",
  },
  TabletPortrait: {
    query: MediaQueryTabletPortrait,
    margin: "20px",
    gutter: "28px",
  },
  TabletLandscape: {
    query: MediaQueryTabletLandscape,
    maxWidth: "1280px",
    margin: "24px",
    gutter: "20px",
  },
  DesktopNarrow: {
    query: MediaQueryDesktopNarrow,
    maxWidth: "1280px",
    margin: "18px",
    gutter: "20px",
  },
  DesktopWide: {
    query: MediaQueryDesktopWide,
    maxWidth: "1280px",
    margin: "18px",
    gutter: "24px",
  },
};
