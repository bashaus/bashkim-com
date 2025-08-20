import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";

import * as S from "./styles";

export type BrowserWindowTitleBarProps = Readonly<PropsWithChildren>;

export default function BrowserWindowTitleBar({
  children,
}: BrowserWindowTitleBarProps) {
  return (
    <S.Container>
      <Box sx={{ display: "flex", gap: 0.75 }}>
        <S.ButtonClose />
        <S.ButtonMin />
        <S.ButtonMax />
      </Box>
      <S.Title variant="body2">{children}</S.Title>
      <Box width={48}></Box>
    </S.Container>
  );
}
