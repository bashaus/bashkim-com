import { Logo } from "@bashkim-com/design-system";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

import HeaderActionSiteSettings from "../HeaderActionSiteSettings";
import HeaderPrimary from "../HeaderPrimary";
import HeaderSocial from "../HeaderSocial";

export default function HeaderDesktop() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Container>
      <Toolbar disableGutters>
        <Box flex={1}>
          <Link href="/">
            <Logo animated={isHome} />
          </Link>
        </Box>

        <Stack direction="row">
          <HeaderPrimary />
          <HeaderSocial />
          <HeaderActionSiteSettings />
        </Stack>
      </Toolbar>
    </Container>
  );
}
