import { RatioWidescreen } from "@bashkim-com/style-guide";
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
