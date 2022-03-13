import {
  ColorGreyscale100,
  ColorWhite,
  GridCell,
  GridContainer,
  MediaQueryMobile,
  MediaQueryNotMobile,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const FullBannerPartial = styled.div`
  width: 100%;
  background-color: ${ColorGreyscale100};
  background-repeat: no-repeat;
  color: ${ColorWhite};

  @media ${MediaQueryMobile} {
    background-size: 100% auto;
    background-position: bottom;
    padding-top: 10px;
    padding-bottom: 75vw;
  }

  @media ${MediaQueryNotMobile} {
    background-size: auto 100%;
    background-position: center center;
  }
`;

export const Container = styled.div`
  ${GridContainer({ margin: [] })}

  @media ${MediaQueryNotMobile} {
    height: 400px;
    max-height: 450px;
  }
`;

export const Content = styled.div`
  ${GridCell({
    columns: {
      MobilePortrait: 12,
      MobileLandscape: 12,
      TabletPortrait: 6,
      TabletLandscape: 5,
      DesktopNarrow: 4,
      DesktopWide: 4,
    },
  })}

  @media ${MediaQueryNotMobile} {
    align-self: center;
  }
`;
