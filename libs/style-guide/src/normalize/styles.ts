import { createGlobalStyle } from "styled-components";

import Appearance from "../appearance";
import {
  ColorGreyscale10,
  ColorGreyscale20,
  DesignPageBackgroundColor,
  DesignPageForegroundColor,
} from "../design/color";
import { FontFamilyCopy, FontFamilyMonospace } from "../design/font";

export const Normalize = createGlobalStyle`
  ${Appearance}
  /* Document */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 18px;
    line-height: 150%;
    font-family: ${FontFamilyCopy};
    background-color: ${DesignPageBackgroundColor};
    color: ${DesignPageForegroundColor};
  }

  /* Forms */

  label {
    cursor: pointer;
    display: inline-block;
  }

  input,
  select,
  button,
  textarea {
    font-family: ${FontFamilyCopy};
    font-size: 100%;
    color: currentColor;
  }

  input,
  textarea {
    cursor: text;
  }

  select,
  button,
  input[type="checkbox"],
  input[type="radio"] {
    cursor: pointer;
  }

  input[type="range"] {
    cursor: ew-resize;
  }

  input:disabled,
  select:disabled,
  button:disabled,
  textarea:disabled {
    cursor: not-allowed;
  }

  /* Objects */

  figure,
  iframe,
  object {
    display: block;
  }

  hr {
    border-top: solid 1px ${ColorGreyscale10};
  }

  /* Text (inline) */

  a {
    text-decoration: none;
    color: currentColor;
  }

  code.inline,
  samp {
    display: inline-block;
    border: solid 1px ${ColorGreyscale20};
    background-color: ${ColorGreyscale10};
    padding: 0 5px;
    margin: 0 2px;
    border-radius: 3px;
    font-family: ${FontFamilyMonospace};
  }

  small {
    font-size: 80%;
  }

  em {
    font-style: italic;
  }

  /* Images */

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
