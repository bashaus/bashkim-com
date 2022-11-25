import { GridCell, GridContainer } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const PortfolioFeaturedCaseStudies = styled.ul`
  ${GridContainer()}
`;

export const PortfolioFeaturedCaseStudy = styled.li`
  ${GridCell({
    columns: {
      MobilePortrait: 12,
      MobileLandscape: 6,
      TabletPortrait: 6,
      TabletLandscape: 3,
      DesktopNarrow: 3,
      DesktopWide: 3,
    },
  })}

  display: flex;
  flex-direction: column;
`;

export const Details = styled.div`
  flex-grow: 0;
`;

export const Tile = styled.a`
  display: block;
  margin-top: 26px;
  flex-grow: 1;
`;
