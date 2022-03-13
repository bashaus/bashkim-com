import { ColorGreyscale100, ColorWhite } from "@bashkim-com/style-guide";
import { MoonIcon, SunIcon } from "@primer/octicons-react";
import styled, { css } from "styled-components";

const Icon = css`
  display: block !important;
`;

export const IconOn = styled(SunIcon)`
  ${Icon}
  color: ${ColorWhite};
`;

export const IconOff = styled(MoonIcon)`
  ${Icon}
  color: ${ColorGreyscale100};
`;
