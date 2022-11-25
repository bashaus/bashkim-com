import { GridContainerBounds } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const FullImagePartial = styled.div`
  ${GridContainerBounds()}

  & > * {
    margin: 0 auto;
  }
`;
