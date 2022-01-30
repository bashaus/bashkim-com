import {
  MediaQuery,
  MediaQueryDesktopNarrow,
  MediaQueryDesktopWide,
  MediaQueryMobileLandscape,
  MediaQueryMobilePortrait,
  MediaQueryTabletLandscape,
  MediaQueryTabletPortrait,
} from "./queries";

export type MediaBreakpointType =
  | "MobilePortrait"
  | "MobileLandscape"
  | "TabletPortrait"
  | "TabletLandscape"
  | "DesktopNarrow"
  | "DesktopWide";

export const MediaBreakpoints: Array<MediaBreakpointType> = [
  "MobilePortrait",
  "MobileLandscape",
  "TabletPortrait",
  "TabletLandscape",
  "DesktopNarrow",
  "DesktopWide",
];

export const MediaBreakpointQuery: Record<MediaBreakpointType, MediaQuery> = {
  MobilePortrait: MediaQueryMobilePortrait,
  MobileLandscape: MediaQueryMobileLandscape,
  TabletPortrait: MediaQueryTabletPortrait,
  TabletLandscape: MediaQueryTabletLandscape,
  DesktopNarrow: MediaQueryDesktopNarrow,
  DesktopWide: MediaQueryDesktopWide,
};
