import { GridContainerBounds, GridSides } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const SubtitlePartial = styled.div`
  ${GridContainerBounds({
    padding: [GridSides.TOP, GridSides.LEFT, GridSides.RIGHT, GridSides.BOTTOM],
  })}
`;
