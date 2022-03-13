import { GridCellPadding, GridSide } from "@bashkim-com/style-guide";
import styled from "styled-components";

import Background from "../../assets/vectors/devices/smartphone.svg";

export const DeviceSmartphone = styled.figure`
  display: block;
  width: 400px;
  margin: 0 auto;
  padding: 0;
`;

export const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  /* 315 x 641.2499999955 */
  width: 100%;
  padding-bottom: 203.57142857%;
`;

export const Device = styled(Background)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Figure = styled.div`
  display: block;
  position: absolute;
  overflow-y: scroll;
  top: 15.9%;
  left: 10.3%;
  width: 79.8%;
  height: 69.5%;

  img {
    display: block;
  }
`;

export const Caption = styled.figcaption`
  ${GridCellPadding({
    sides: [GridSide.TOP, GridSide.LEFT, GridSide.RIGHT, GridSide.BOTTOM],
  })}

  text-align: center;
`;
