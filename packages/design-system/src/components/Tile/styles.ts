import {
  ColorGreyscale100,
  ColorWhite,
  Heading3,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const Tile = styled.div`
  color: ${ColorGreyscale100};
  background-color: ${ColorWhite};
  box-shadow: 0 0 14px 1px rgba(204, 204, 204, 0.5);
  transition: all 0.3s ease-in-out;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  height: 100%;
  max-width: 350px;

  a:hover & {
    box-shadow: 0 0 20px 3px rgba(204, 204, 204, 0.7);
  }
`;

export const Poster = styled.div`
  height: 1px;
  padding-bottom: 56.25%;
  order: 1;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 12px;
`;

export const Icon = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  width: 158px;
  height: 158px;
  order: 2;
  border-radius: 50%;
  border: solid 4px ${ColorWhite};
  background-color: ${ColorWhite};
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Heading = styled.h3`
  ${Heading3}
  order: 3;
`;

export const Description = styled.p`
  order: 4;
  margin-top: 10px;
`;
