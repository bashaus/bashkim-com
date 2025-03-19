import Box from "@mui/material/Box";
import { ReactNode } from "react";

import HeaderDesktop from "../HeaderDesktop";
import HeaderMobile from "../HeaderMobile";

export type HeaderProps = Readonly<{
  backButton?: ReactNode;
}>;

export default function Header({ backButton }: HeaderProps) {
  return (
    <>
      <Box display={{ xs: "block", md: "none" }}>
        <HeaderMobile backButton={backButton} />
      </Box>

      <Box display={{ xs: "none", md: "block" }}>
        <HeaderDesktop />
      </Box>
    </>
  );
}
