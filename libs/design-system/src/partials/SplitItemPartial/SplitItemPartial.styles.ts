import {
  ColorGreyscale10,
  ColorWhite,
  GridCellPadding,
  GridSide,
  MediaQueryMobile,
  MediaQueryNotMobile,
} from "@bashkim-com/style-guide";
import styled, { css } from "styled-components";

type SplitItemPartialProps = {
  "prop-background-image"?: string;
};

export const SplitItemPartial = styled.div<SplitItemPartialProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  div {
    ${GridCellPadding({
      sides: [GridSide.LEFT, GridSide.RIGHT],
    })}

    max-width: 320px;
    flex-grow: 1;
    flex-shrink: 0;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  @media ${MediaQueryMobile} {
    width: 100%;
    order: 2;

    div {
      flex-basis: 100%;
    }
  }

  @media ${MediaQueryNotMobile} {
    width: 50%;
    min-height: calc(9 / 16 * 50vw);

    div {
      flex-basis: 40%;
    }
  }

  ${({ "prop-background-image": backgroundImage }) => {
    if (backgroundImage) {
      return css`
        background-image: url("${backgroundImage}");
        background-color: ${ColorGreyscale10};
        background-size: cover;
        background-position: center center;

        &::before,
        &::after {
          border-color: ${ColorWhite};
        }

        @media ${MediaQueryMobile} {
          min-height: 60vw;
          order: 1;
        }

        @media ${MediaQueryNotMobile} {
          width: calc(50% + 20px);
        }
      `;
    } else {
      return css`
        @media ${MediaQueryMobile} {
          padding: 20px;
        }

        @media ${MediaQueryNotMobile} {
          padding: 40px;
        }
      `;
    }
  }}
`;
