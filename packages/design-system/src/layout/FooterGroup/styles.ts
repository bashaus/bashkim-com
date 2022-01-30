import {
  GridContainerBounds,
  MediaQueryScreenLarge,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const FooterGroup = styled.div`
  ${GridContainerBounds({
    breakpoints: ["TabletLandscape", "DesktopNarrow", "DesktopWide"],
    margin: [],
  })}

  @media ${MediaQueryScreenLarge} {
    display: flex;
    grid-gap: 0;
  }
`;
