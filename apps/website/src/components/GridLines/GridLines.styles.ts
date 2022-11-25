import {
  GridCell,
  GridContainer,
  GridSide,
  Layer,
  zIndex,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const GridLines = styled.div`
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndex(Layer.GRID_LINES)};
`;

export const Container = styled.div`
  ${GridContainer({
    margin: [],
    padding: [GridSide.LEFT, GridSide.RIGHT],
  })}

  height: 100%;
`;

export const Cell = styled.div`
  ${GridCell({
    columns: {
      MobilePortrait: 1,
      MobileLandscape: 1,
      TabletPortrait: 1,
      TabletLandscape: 1,
      DesktopNarrow: 1,
      DesktopWide: 1,
    },
  })}

  background-color: rgba(200, 0, 0, 0.2);
  height: 100%;
`;
