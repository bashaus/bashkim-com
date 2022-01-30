import {
  Clearfix,
  MediaQueryScreenLarge,
  MediaQueryScreenSmall,
} from "@bashkim-com/style-guide";
import styled, { css } from "styled-components";

export type TurnProps = {
  "state-isInitialized": boolean;
};

export const Turn = styled.div<TurnProps>`
  ${Clearfix}

  position: relative;
  margin-left: auto;
  margin-right: auto;

  @media ${MediaQueryScreenSmall} {
    margin-bottom: 40px;

    ${({ "state-isInitialized": isInitialized }) => {
      if (isInitialized) {
        return css`
          margin-bottom: 50px;
        `;
      }
    }}
  }

  @media ${MediaQueryScreenLarge} {
    ${({ "state-isInitialized": isInitialized }) => {
      if (!isInitialized) {
        return css`
          li {
            float: left;
            width: 50%;
          }
        `;
      }
    }}

    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const Pages = styled.div`
  margin-left: auto;
  margin-right: auto;
  transition: margin-left 1s;

  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
