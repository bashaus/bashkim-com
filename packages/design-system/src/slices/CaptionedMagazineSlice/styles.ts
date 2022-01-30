import styled, { css } from "styled-components";

export const Slider = styled.div`
  position: relative;
  margin-top: 20px;
  padding-top: 40px;
`;

export const PaginationText = styled.span`
  position: absolute;
  top: 0;
  left: 40px;
  right: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 80%;
  margin-top: 0 !important;
`;

const PaginationButton = () => css`
  position: absolute;
  width: 40px;
  height: 40px;
  margin-top: 0;
`;

export const PaginationBack = styled.button.attrs({
  type: "button",
})`
  ${PaginationButton}
  top: 0;
  left: 0;
  text-align: left;
`;

export const PaginationNext = styled.button.attrs({
  type: "button",
})`
  ${PaginationButton}
  top: 0;
  right: 0;
  text-align: right;
`;

export const PaginationRange = styled.input.attrs({
  type: "range",
  min: 1,
  step: 1,
})`
  width: 100%;
  cursor: col-resize;
`;
