import { MediaQueryMobile } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  position: relative;
  transition: all 0.3s;
`;

export const Title = styled.a`
  display: block;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;

  @media ${MediaQueryMobile} {
    text-align: center;
  }
`;
