import styled from "styled-components";

export const SvgContainer = styled.svg.attrs({
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none",
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const SvgPath = styled.path.attrs({
  vectorEffect: "non-scaling-stroke",
  d: "M 0 100 V 100 Q 50 100 100 100 V 100 z",
  fill: "rgba(0, 0, 0, .8)",
})``;
