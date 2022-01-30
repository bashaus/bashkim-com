import {
  MediaQueryMobile,
  MediaQueryNotMobile,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const Navigation = styled.div`
  position: relative;

  @media ${MediaQueryMobile} {
    &::after {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, #fff 85%);
      content: "";
      display: block;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 50px;
    }
  }

  @media ${MediaQueryNotMobile} {
    flex-grow: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media ${MediaQueryMobile} {
    padding: 0 10px;
    overflow: auto hidden;
    scrollbar-width: thin;
    white-space: nowrap;
  }

  @media ${MediaQueryNotMobile} {
    justify-content: flex-end;
  }
`;
