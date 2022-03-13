import {
  DesignBoxBorderColor,
  GridCell,
  GridContainer,
  MediaQueryNotMobile,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const CaseStudyHeader = styled.div`
  ${GridContainer()}
`;

export const CaseStudyDetails = styled.div`
  ${GridCell({
    columns: {
      MobilePortrait: 12,
      MobileLandscape: 12,
      TabletPortrait: 9,
      TabletLandscape: 9,
      DesktopNarrow: 9,
      DesktopWide: 9,
    },
  })}
`;

export const CaseStudyTechnologies = styled.div`
  ${GridCell({
    columns: {
      MobilePortrait: 12,
      MobileLandscape: 12,
      TabletPortrait: 3,
      TabletLandscape: 3,
      DesktopNarrow: 3,
      DesktopWide: 3,
    },
  })}

  @media ${MediaQueryNotMobile} {
    border-left: solid 1px ${DesignBoxBorderColor};
  }
`;
