import { ColorGreyscale100, ColorWhite } from "@bashkim-com/style-guide";
import { CpuIcon, EyeClosedIcon } from "@primer/octicons-react";
import styled, { css } from "styled-components";

const Icon = css`
  display: block !important;
`;

export const IconOn = styled(CpuIcon)`
  ${Icon}
  color: ${ColorWhite};
`;

export const IconOff = styled(EyeClosedIcon)`
  ${Icon}
  color: ${ColorGreyscale100};
`;
