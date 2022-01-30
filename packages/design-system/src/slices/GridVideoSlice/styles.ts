import { GridCell, GridContainer } from "@bashkim-com/style-guide";
import styled from "styled-components";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";

export const Videos = styled.ol`
  ${GridContainer()}

  &[data-column-count="1"],
  &[data-column-count="2"],
  &[data-column-count="3"] {
    justify-content: center;
  }
`;

export const Video = styled.li`
  ${GridCell({
    columns: {
      MobilePortrait: 12,
      MobileLandscape: 6,
      TabletPortrait: 4,
      TabletLandscape: 3,
      DesktopNarrow: 3,
      DesktopWide: 3,
    },
  })}
`;

export const Description = styled(RichTextFormatter)`
  display: block;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
