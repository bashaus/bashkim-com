import {
  //   ColorGreyscale100,
  //   ColorWhite,
  RatioWidescreen,
} from "@bashkim-com/style-guide";
// import { PlayIcon } from "@primer/octicons-react";
import styled from "styled-components";

export const Poster = styled.div`
  ${RatioWidescreen};

  position: relative;
  width: 100%;
  height: 100%;
`;

export const PosterImage = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// export const PosterPlayIcon = styled(PlayIcon)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 50px;
//   height: 50px;
//   transform: translate(-50%, -50%);
//   pointer-events: none;
//   fill: ${ColorWhite};
//   filter: drop-shadow(3px 2px 2px ${ColorGreyscale100});
// `;
