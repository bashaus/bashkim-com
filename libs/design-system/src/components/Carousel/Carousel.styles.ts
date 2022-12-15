import styled from "styled-components";

import { slickCarouselStyles } from "../../libraries/slick/styles";

export * from "./Carousel.arrow.styles";
export * from "./Carousel.dots.styles";

export const Carousel = styled.div`
  width: 100%;
  margin: 0 auto;

  /* position relative and z-index fix webkit rendering fonts issue */
  position: relative;
  z-index: 1;

  /* -webkit */
  -webkit-tap-highlight-color: transparent;

  ${slickCarouselStyles};
`;
