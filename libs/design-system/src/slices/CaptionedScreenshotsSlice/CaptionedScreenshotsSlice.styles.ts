import styled from "styled-components";

export const Slider = styled.div`
  position: relative;
  margin-top: 20px;
  padding-top: 40px;

  &::before {
    content: "Slide to resize";
    position: absolute;
    top: 16px;
    left: 40px;
    right: 40px;
    line-height: 16px;
    text-align: center;
    font-size: 80%;
  }
`;

export const IconMobile = styled.span`
  position: absolute;
  top: 10px;
  left: 0;
`;

export const IconDesktop = styled.span`
  position: absolute;
  top: 8px;
  right: 0;
`;

export const Range = styled.input.attrs({
  type: "range",
  min: 0,
  step: 1,
})`
  width: 100%;
  cursor: ew-resize;
`;
