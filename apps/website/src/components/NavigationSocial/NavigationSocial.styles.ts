import { NavigationGroup, NavigationItem } from "@bashkim-com/design-system";
import {
  MediaQueryMobile,
  MediaQueryNotMobile,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const NavigationSocial = styled(NavigationGroup)`
  @media ${MediaQueryMobile} {
    svg {
      margin-right: 5px;
      width: 25px;
      height: 25px;
    }
  }

  @media ${MediaQueryNotMobile} {
    padding-left: 12px;

    svg {
      width: 30px;
      height: 30px;
    }

    span {
      display: none;
    }
  }
`;

const SocialIcon = styled(NavigationItem)`
  svg {
    fill: currentColor;
  }

  path,
  circle,
  ellipse {
    transition: fill 0.3s ease-in-out;
  }
`;

export const IconGitHub = styled(SocialIcon)`
  @media ${MediaQueryMobile} {
    svg path {
      fill: currentColor;
    }
  }

  @media ${MediaQueryNotMobile} {
    a:hover svg path {
      fill: #24292f;
    }
  }
`;

export const IconLinkedIn = styled(SocialIcon)`
  @media ${MediaQueryMobile} {
    svg path {
      fill: currentColor;
    }
  }

  @media ${MediaQueryNotMobile} {
    a:hover svg path {
      fill: #0077b5;
    }
  }
`;

export const IconMedium = styled(SocialIcon)`
  @media ${MediaQueryMobile} {
    svg circle,
    svg ellipse {
      fill: currentColor;
    }
  }

  @media ${MediaQueryNotMobile} {
    a:hover svg circle,
    a:hover svg ellipse {
      fill: #191919;
    }
  }
`;

export const IconStackOverflow = styled(SocialIcon)`
  @media ${MediaQueryMobile} {
    svg .VectorStackOverflowContainer,
    svg .VectorStackOverflowStack {
      fill: currentColor;
    }
  }

  @media ${MediaQueryNotMobile} {
    a:hover svg .VectorStackOverflowContainer {
      fill: #bcbbbb;
    }

    a:hover svg .VectorStackOverflowStack {
      fill: #f48024;
    }
  }
`;
