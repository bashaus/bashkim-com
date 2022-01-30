import { GridCell, GridContainer, Heading3 } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const Heading = styled.h3`
  ${Heading3}
  text-align: center;
`;

export const Technologies = styled.ul`
  ${GridContainer({ columns: 2 })};
`;

export const Technology = styled.li`
  ${GridCell({
    columns: {
      MobilePortrait: 1,
      MobileLandscape: 1,
      TabletPortrait: 2,
      TabletLandscape: 1,
      DesktopNarrow: 1,
      DesktopWide: 1,
    },
  })}
`;

export const TechnologyIcon = styled.img`
  vertical-align: middle;
  margin: 0 auto;
  width: 100%;
  max-width: 60px;
  height: auto;
`;

export const TechnologyName = styled.span`
  display: block;
  text-align: center;
  font-size: small;
  font-weight: bold;
  text-transform: uppercase;
`;
