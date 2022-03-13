import {
  DesignBoxBackgroundColor,
  DesignBoxBorderColor,
  DesignBoxForegroundColor,
  DesignBoxShadow,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const AnimationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${DesignBoxBackgroundColor};
  color: ${DesignBoxForegroundColor};
  box-shadow: ${DesignBoxShadow};
  border: solid 1px ${DesignBoxBorderColor};
`;
