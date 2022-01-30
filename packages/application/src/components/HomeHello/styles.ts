import {
  ColorGreyscale100,
  ColorWhite,
  MediaQueryMobile,
  MediaQueryNotMobile,
  MediaQueryScreenSmall,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const Introduction = styled.div`
  a {
    font-weight: bold;
    display: inline-block;
    margin-top: 4px;
    margin-bottom: 4px;
    border: solid ${ColorWhite};
    padding: 4px 12px;
    color: ${ColorWhite};
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    background-color: ${ColorWhite};
    color: ${ColorGreyscale100};
  }

  @media ${MediaQueryMobile} {
    a {
      border-width: 1px;
      line-height: 24px;
    }
  }

  @media ${MediaQueryNotMobile} {
    a {
      border-width: 3px;
      line-height: 24px;
    }
  }
`;

export const IntroductionTitle = styled.h1``;

export const IntroductionName = styled.span`
  @media ${MediaQueryMobile} {
    display: block;
    margin-bottom: 20px;

    &::after {
      content: ".";
      display: inline;
    }
  }

  @media ${MediaQueryNotMobile} {
    &::after {
      content: ",";
      display: inline-block;
    }
  }
`;

export const IntroductionSpiel = styled.span`
  @media ${MediaQueryMobile} {
    display: block;
  }
`;

/* */

export const Links = styled.ul`
  display: flex;
  flex-direction: row;

  @media ${MediaQueryScreenSmall} {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const Link = styled.li`
  flex: 1 0 50%;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

export const LinkIcon = styled.svg`
  display: block;
  margin: 12px auto;
  fill: #ffffff;
  width: 75px;
  height: 75px;

  a & {
    transition: transform 0.3s ease-in-out;
  }

  a:hover & {
    transform: scale(1.1);
  }
`;
