import { GridCell, GridContainer } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const CaseStudyDetails = styled.div`
  ${GridContainer({ margin: [], padding: [] })}
  flex-wrap: wrap;

  > div {
    ${GridCell({
      columns: {
        MobilePortrait: 12,
        MobileLandscape: 6,
        TabletPortrait: 6,
        TabletLandscape: 4,
        DesktopNarrow: 4,
        DesktopWide: 4,
      },
    })}
  }
`;
