import Logo from "@bashkim-com/design-system/Logo";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType, PropsWithChildren } from "react";

import HeaderActionSiteSettings from "@/components/HeaderActionSiteSettings";
import { type HeaderDesktopVariant } from "@/components/HeaderDesktop/interfaces";
import HeaderPrimary from "@/components/HeaderPrimary";
import HeaderSocial from "@/components/HeaderSocial";
import { useNavigation } from "@/contexts/Navigation/context";

import * as S from "./styles";

export type HeaderDesktopProps = Readonly<{
  variant: keyof HeaderDesktopVariant;
}>;

const variantComponent: Record<
  keyof HeaderDesktopVariant,
  ComponentType<
    PropsWithChildren<{
      "data-scroll-at-top": boolean;
    }>
  >
> = {
  base: S.BaseHeader,
  glass: S.GlassHeader,
};

export default function HeaderDesktop({ variant }: HeaderDesktopProps) {
  const { navigationState } = useNavigation();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const VariantComponent = variantComponent[variant];

  return (
    <VariantComponent data-scroll-at-top={navigationState.scrollAtTop}>
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
    </VariantComponent>
  );
}
