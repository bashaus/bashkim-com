import { GridCell, GridContainer } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const CaptionedPartial = styled.figure`
  ${GridContainer()}
`;

export const Caption = styled.figcaption`
  ${GridCell({
    columns: {
      MobilePortrait: 12,
      MobileLandscape: 12,
      TabletPortrait: 8,
      TabletLandscape: 3,
      DesktopNarrow: 3,
      DesktopWide: 3,
    },
  })}
`;

export const Figure = styled.div`
  ${GridCell({
    columns: {
      MobilePortrait: 12,
      MobileLandscape: 12,
      TabletPortrait: 12,
      TabletLandscape: 9,
      DesktopNarrow: 9,
      DesktopWide: 9,
    },
  })}

  & > * {
    margin: 0 auto;
  }
`;
