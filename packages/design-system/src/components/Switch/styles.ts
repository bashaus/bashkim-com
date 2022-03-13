import { ColorWhite } from "@bashkim-com/style-guide";
import styled, { css } from "styled-components";

export const Switch = styled.label`
  display: block;
  width: 60px;
  height: 34px;
  background-color: #ccc;
  transition: 0.3s;
  border-radius: 34px;
  padding: 4px;

  &[aria-checked="true"] {
    background-color: #2196f3;
  }
`;

export const Slider = styled.div`
  position: relative;
  transition: 0.3s;
  width: 52px;
  height: 26px;
`;

export const Input = styled.input`
  position: absolute;
  height: 26px;
  width: 26px;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: ${ColorWhite};
  transition: 0.3s;
  border-radius: 50%;
  appearance: none;

  &:focus {
    box-shadow: 0 0 4px #2196f3;
  }

  &:checked {
    left: calc(100% - 26px);
  }
`;

const Icon = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  text-align: center;
  border-radius: 50%;
  width: 50%;
  transition: 0.3s;
`;

export const IconOff = styled.div`
  ${Icon}
  right: 0;
  opacity: 1;

  ${Switch}[aria-checked="true"] & {
    opacity: 0;
  }
`;

export const IconOn = styled.div`
  ${Icon}
  left: 0;
  opacity: 0;

  ${Switch}[aria-checked="true"] & {
    opacity: 1;
  }
`;
