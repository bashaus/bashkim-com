import { GridCell, GridContainer } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const Embeds = styled.div`
  ${GridContainer()}
`;

export const Embed = styled.div`
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
`;
