import { css } from "styled-components";

export const Clearfix = () => css`
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;
