import {
  ColorGreyscale100,
  ColorWhite,
  RatioWidescreen,
} from "@bashkim-com/style-guide";
import { SquareIcon, TriangleRightIcon, XIcon } from "@primer/octicons-react";
import styled from "styled-components";

export const VideoFrame = styled.div`
  ${RatioWidescreen};

  width: 80vw;

  background-color: ${ColorGreyscale100};
  color: ${ColorWhite};
`;

export const VideoControls = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`;

export const ControlButton = styled.button`
  display: flex;
  appearance: none;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: solid 1px transparent;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  color: ${ColorWhite};
`;

export const PlayIcon = styled(TriangleRightIcon)`
  width: 30px;
  height: 30px;
`;

export const StopIcon = styled(SquareIcon)`
  width: 30px;
  height: 30px;
`;

export const CloseIcon = styled(XIcon)`
  width: 24px;
  height: 24px;
`;
