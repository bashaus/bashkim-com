import {
  MediaQueryMobile,
  MediaQueryNotMobile,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const NavigationItem = styled.li`
  text-transform: uppercase;
  font-weight: bold;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
  }

  span {
    border-bottom: solid 2px transparent;
    padding-top: 2px;
    transition: all 0.3s ease-in-out;
  }

  &[aria-current] span {
    border-bottom-color: currentColor;
  }

  @media ${MediaQueryMobile} {
    a {
      height: 48px;
    }
  }

  @media ${MediaQueryNotMobile} {
    a {
      height: 60px;
    }
  }
`;
