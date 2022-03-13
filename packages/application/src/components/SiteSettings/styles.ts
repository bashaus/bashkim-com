import {
  DesignBoxBorderColor,
  GridContainerPadding,
  GridFullPadding,
  GridSide,
  Heading3,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const SiteSettings = styled.div`
  width: 320px;
  max-width: calc(100vw - 40px);
`;

export const Header = styled.div`
  display: flex;
  border-bottom: solid 1px ${DesignBoxBorderColor};
  align-items: center;
`;

export const HeaderText = styled.div`
  ${GridFullPadding({ sides: [GridSide.LEFT, GridSide.RIGHT] })}
  ${Heading3}
  flex: 1;
`;

export const ListItem = styled.div`
  ${GridContainerPadding()}
  display: flex;
  flex-direction: row;
  min-height: 60px;
  align-items: center;
`;

export const ListItemLabel = styled.div`
  flex: 1;
`;

export const ListItemIcon = styled.div``;
