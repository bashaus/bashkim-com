import { GridCellPadding, GridSide } from "@bashkim-com/style-guide";
import styled from "styled-components";

import Background from "../../assets/vectors/devices/feature-phone.svg";

export const DeviceFeaturePhone = styled.figure`
  display: block;
  width: 300px;
  margin: 0 auto;
  padding: 0;
`;

export const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  /* 255 x 467.773 */
  width: 100%;
  padding-bottom: 183.44039216%;
`;

export const Device = styled(Background)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  fill: currentColor;
`;

export const Figure = styled.div`
  display: block;
  position: absolute;
  overflow-y: scroll;
  top: 18.6%;
  left: 8.4%;
  right: 9%;
  height: 35.4%;

  & > * {
    display: block;
  }
`;

export const Caption = styled.figcaption`
  ${GridCellPadding({
    sides: [GridSide.TOP, GridSide.LEFT, GridSide.RIGHT, GridSide.BOTTOM],
  })}

  text-align: center;
`;
