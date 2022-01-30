import { NavigationItem } from "@bashkim-com/design-system";
import {
  ColorPrimary100,
  ColorSecondary100,
  MediaQueryNotMobile,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const PortfolioNavigationItem = styled(NavigationItem)`
  @media ${MediaQueryNotMobile} {
    a:hover {
      color: ${ColorPrimary100};
    }
  }
`;

export const AboutNavigationItem = styled(NavigationItem)`
  @media ${MediaQueryNotMobile} {
    a:hover {
      color: ${ColorSecondary100};
    }
  }
`;
