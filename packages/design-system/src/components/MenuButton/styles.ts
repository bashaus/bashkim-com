import { DesignPageForegroundColorAccent } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const MenuButton = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;

  display: block;
  width: 60px;
  height: 60px;
  line-height: 60px;

  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 60px;
  text-align: center;
  transition: 0.3s;

  &:hover {
    color: ${DesignPageForegroundColorAccent};
  }

  &:not([data-props-onclick="true"]):not(:disabled) {
    cursor: default;
  }

  svg {
    display: inline-block;
    fill: currentColor;
    height: 60px;
  }

  &:focus {
    box-shadow: 0 0 4px #2196f3;
  }
`;
