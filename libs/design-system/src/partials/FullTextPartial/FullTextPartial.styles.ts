import {
  GridContainerBounds,
  MediaQueryScreenLarge,
  MediaQueryTabletPortrait,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const FullTextPartial = styled.div`
  ${GridContainerBounds()}

  @media ${MediaQueryTabletPortrait} {
    max-width: 526px;
  }

  @media ${MediaQueryScreenLarge} {
    max-width: 648px;
  }
`;
