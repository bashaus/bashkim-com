import {
  ColorGreyscale100,
  ColorWhite,
  RatioWidescreen,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const VideoPlayer = styled.div`
  ${RatioWidescreen};

  background-color: ${ColorGreyscale100};
  color: ${ColorWhite};

  width: 100%;
`;
