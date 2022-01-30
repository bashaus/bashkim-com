import {
  ColorAccoladeBronze,
  ColorAccoladeGold,
  ColorAccoladeHonour,
  ColorAccoladeSilver,
  GridCell,
  GridCellPadding,
  GridContainer,
  GridSides,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

import TrophyVector from "../../assets/vectors/trophy.svg";

export const AccoladeSlice = styled.div`
  ${GridContainer({
    margin: [],
    padding: [GridSides.TOP, GridSides.LEFT, GridSides.RIGHT, GridSides.BOTTOM],
  })}
`;

export const Details = styled.div`
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
`;

export const Awards = styled.div`
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

  ${GridContainer({
    margin: [],
    padding: [],
  })}

  width: 100%;
`;

export const Award = styled.div`
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

  ${GridCellPadding({
    sides: [GridSides.TOP, GridSides.BOTTOM],
  })}

  a {
    display: block;
  }
`;

export const Trophy = styled(TrophyVector)`
  display: block;
  width: 50px;
  height: 50px;
  margin-left: -10px;
  margin-bottom: 20px;

  [data-prop-place="gold"] & {
    fill: ${ColorAccoladeGold};
  }

  [data-prop-place="silver"] & {
    fill: ${ColorAccoladeSilver};
  }

  [data-prop-place="bronze"] & {
    fill: ${ColorAccoladeBronze};
  }

  [data-prop-place="honour"] & {
    fill: ${ColorAccoladeHonour};
  }
`;
