import {
  DesignPageForegroundColorAccent,
  GridCellPadding,
  GridSide,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const Brick = styled.article`
  display: block;
  height: 100%;
  max-width: 450px;

  &:hover {
    color: ${DesignPageForegroundColorAccent};
  }
`;

export const Content = styled.div`
  position: relative;
  display: block;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 80px;
  cursor: pointer;
  padding: 10px;
  height: 100%;
  transition: color 0.3s ease-in-out;
  text-decoration: none;
`;

export const Image = styled.div`
  position: absolute;
  top: 0;
  left: -80px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Heading = styled.h3`
  font-weight: bold;
  transition: all 0.3s ease-in-out;
`;

export const Description = styled.p`
  ${GridCellPadding({
    sides: [GridSide.TOP],
  })}
`;
