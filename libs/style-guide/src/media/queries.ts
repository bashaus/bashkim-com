/* Screen */

export const MediaQueryScreenSmall = "screen and (max-width: 1023px), print";
export const MediaQueryScreenLarge = "screen and (min-width: 1024px)";

/* Mobile */

export const MediaQueryMobile = "screen and (max-width: 767px)";
export const MediaQueryNotMobile = "screen and (min-width: 768px), print";

export const MediaQueryMobilePortrait = "screen and (max-width: 479px)";
export const MediaQueryNotMobilePortrait = "screen and (min-width: 480px)";

export const MediaQueryMobileLandscape =
  "screen and (min-width: 480px) and (max-width: 767px)";

/* Tablet */

export const MediaQueryTablet =
  "screen and (min-width: 768px) and (max-width: 1439px), print";

export const MediaQueryTabletPortrait =
  "screen and (min-width: 768px) and (max-width: 1023px), print";
export const MediaQueryTabletLandscape =
  "screen and (min-width: 1024px) and (max-width: 1439px)";

/* Desktop */

export const MediaQueryDesktop = "screen and (min-width: 1440px)";
export const MediaQueryNotDesktop = "screen and (max-width: 1439px), print";

export const MediaQueryDesktopNarrow =
  "screen and (min-width: 1440px) and (max-width: 1599px)";

export const MediaQueryDesktopWide = "screen and (min-width: 1600px)";
export const MediaQueryNotDesktopWide = "screen and (max-width: 1599px)";

export type MediaQuery =
  | typeof MediaQueryScreenSmall
  | typeof MediaQueryScreenLarge
  | typeof MediaQueryMobile
  | typeof MediaQueryNotMobile
  | typeof MediaQueryMobilePortrait
  | typeof MediaQueryNotMobilePortrait
  | typeof MediaQueryMobileLandscape
  | typeof MediaQueryTablet
  | typeof MediaQueryTabletPortrait
  | typeof MediaQueryTabletLandscape
  | typeof MediaQueryDesktop
  | typeof MediaQueryNotDesktop
  | typeof MediaQueryDesktopNarrow
  | typeof MediaQueryDesktopWide
  | typeof MediaQueryNotDesktopWide;
