import { css } from "styled-components";

import dark from "./dark";
import light from "./light";

export default css`
  :root:not([data-appearance]) {
    @media (prefers-color-scheme: light) {
      ${light}
    }

    @media (prefers-color-scheme: dark) {
      ${dark}
    }
  }

  :root[data-appearance="dark"] {
    ${dark}
  }

  :root[data-appearance="light"] {
    ${light}
  }
`;
