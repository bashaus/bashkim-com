import {
  GridContainerBounds,
  MediaQueryMobileLandscape,
  MediaQueryMobilePortrait,
  MediaQueryScreenLarge,
  MediaQueryTabletPortrait,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const NewspaperPartial = styled.div`
  ${GridContainerBounds()}

  @media ${MediaQueryMobilePortrait} {
    column-count: 1;
  }

  @media ${MediaQueryMobileLandscape} {
    column-count: 2;
  }

  @media ${MediaQueryTabletPortrait} {
    column-count: 3;
  }

  @media ${MediaQueryScreenLarge} {
    column-count: 4;
  }

  > div {
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
