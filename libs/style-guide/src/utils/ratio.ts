import { css } from "styled-components";

const Ratio = () => css`
  position: relative;
  height: 0;
  overflow: hidden;

  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0 none;
  }
`;

/**
 * Ratio of 1:1
 */
export const RatioSquare = css`
  ${Ratio}
  padding-bottom: 100%;
`;

/**
 * Ratio of 4:3
 */
export const RatioStandard = css`
  ${Ratio}
  padding-bottom: calc(100% * 3 / 4);
`;

/**
 * Ratio of 16:9
 */
export const RatioWidescreen = css`
  ${Ratio}
  padding-bottom: calc(100% * 9 / 16);
`;
