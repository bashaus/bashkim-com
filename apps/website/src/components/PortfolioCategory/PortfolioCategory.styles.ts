import { GridCell, GridContainer } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const CaseStudies = styled.ul`
  ${GridContainer()}
`;

export const CaseStudy = styled.li`
  ${GridCell({
    columns: {
      MobilePortrait: 12,
      MobileLandscape: 6,
      TabletPortrait: 6,
      TabletLandscape: 4,
      DesktopNarrow: 3,
      DesktopWide: 3,
    },
  })}
`;
