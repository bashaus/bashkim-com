import {
  DesignBoxBackgroundColor,
  DesignBoxBorderColor,
  DesignBoxForegroundColor,
  DesignBoxShadow,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const ModalFrame = styled.div`
  background-color: ${DesignBoxBackgroundColor};
  color: ${DesignBoxForegroundColor};
  box-shadow: ${DesignBoxShadow};
  border: solid 1px ${DesignBoxBorderColor};
  border-radius: 4px;
`;
