import { GridCell, GridContainer } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const CaseStudyCollaborators = styled.ul`
  ${GridContainer()}
`;

export const CaseStudyCollaborator = styled.li`
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

  strong {
    font-weight: bold;
  }

  a {
    text-decoration: underline;
  }
`;
