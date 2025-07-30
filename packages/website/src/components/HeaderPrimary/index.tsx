import Stack from "@mui/material/Stack";
import { usePathname } from "next/navigation";

import * as S from "./styles";

export default function HeaderPrimary() {
  const pathname = usePathname();

  const isPortfolio = pathname?.startsWith("/portfolio");
  const isAbout = pathname?.startsWith("/about");
  const isSource = pathname?.startsWith("/source");

  return (
    <Stack direction="row" role="menu">
      <S.PortfolioButton
        variant="navigation"
        href="/portfolio"
        aria-current={isPortfolio ? "location" : undefined}
        role="menuitem"
      >
        <span data-label>Portfolio</span>
      </S.PortfolioButton>

      <S.AboutButton
        variant="navigation"
        href="/about"
        aria-current={isAbout ? "location" : undefined}
        role="menuitem"
      >
        <span data-label>About</span>
      </S.AboutButton>

      <S.SourceButton
        variant="navigation"
        href="/source"
        aria-current={isSource ? "location" : undefined}
        role="menuitem"
      >
        <span data-label>Source</span>
      </S.SourceButton>
    </Stack>
  );
}
