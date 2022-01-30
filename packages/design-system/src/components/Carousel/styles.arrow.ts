import styled from "styled-components";

const arrowLeft = "←";
const arrowRight = "→";

const Arrow = styled.div`
  font-size: 0;
  line-height: 0;
  position: absolute;
  display: block;
  top: 50%;
  width: 20px;
  height: 20px;
  padding: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  border: none;
  outline: none;
  background: transparent;

  &:hover,
  &:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }

  &::before {
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: black;
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &.slick-disabled::before {
    opacity: 0.25;
  }
`;

export const ArrowPrev = styled(Arrow)`
  left: -25px;

  [dir="rtl"] & {
    right: -25px;
    left: auto;
  }

  &::before {
    content: "${arrowLeft}";
  }

  [dir="rtl"] &::before {
    content: "${arrowRight}";
  }
`;

export const ArrowNext = styled(Arrow)`
  right: -25px;

  [dir="rtl"] & {
    right: auto;
    left: -25px;
  }

  &::before {
    content: "${arrowRight}";
  }

  [dir="rtl"] &::before {
    content: "${arrowLeft}";
  }
`;
