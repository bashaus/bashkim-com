import {
  ColorGreyscale100,
  MediaQueryScreenLarge,
  MediaQueryScreenSmall,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const FooterLinks = styled.ul`
  a {
    display: block;
    text-transform: uppercase;
    color: ${ColorGreyscale100};
    font-size: 1em;
  }

  @media ${MediaQueryScreenSmall} {
    a {
      display: block;
      position: relative;
      line-height: 3em;
      font-size: 1em;
    }

    a::before {
      content: "\2022";
      display: inline-block;
      width: 1em;
      font-weight: bold;
      font-size: 20px;
    }
  }

  @media ${MediaQueryScreenLarge} {
    li {
      height: 2em;
    }

    a {
      font-size: 1em;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;
