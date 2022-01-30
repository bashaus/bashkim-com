import { ChevronDown, ColorGreyscale100 } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const Background = styled.div`
  ${ChevronDown()}

  position: relative;
  background-color: ${ColorGreyscale100};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 400px;
`;
