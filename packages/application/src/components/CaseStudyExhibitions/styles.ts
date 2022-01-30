import { GridCell, GridContainer } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const CaseStudyExhibitions = styled.ol`
  ${GridContainer()}
`;

export const CaseStudyExhibition = styled.li`
  ${GridCell({
    columns: {
      MobilePortrait: 12,
      MobileLandscape: 6,
      TabletPortrait: 4,
      TabletLandscape: 3,
      DesktopNarrow: 3,
      DesktopWide: 3,
    },
  })}
`;
