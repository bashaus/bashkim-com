import { GridContainerBounds, GridSide } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const SubtitlePartial = styled.div`
  ${GridContainerBounds({
    padding: [GridSide.TOP, GridSide.LEFT, GridSide.RIGHT, GridSide.BOTTOM],
  })}
`;
