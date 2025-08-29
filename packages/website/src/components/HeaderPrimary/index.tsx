import Stack from "@mui/material/Stack";
import { usePathname } from "next/navigation";

import {
  getAboutPath,
  getPortfolioPath,
  getSourcePath,
} from "@/libraries/app/navigation";

import * as S from "./styles";

export default function HeaderPrimary() {
  const pathname = usePathname();

  const portfolioPath = getPortfolioPath();
  const isPortfolioPath = pathname.startsWith(portfolioPath);

  const aboutPath = getAboutPath();
  const isAboutPath = pathname.startsWith(aboutPath);

  const sourcePath = getSourcePath();
  const isSourcePath = pathname.startsWith(sourcePath);

  return (
    <Stack direction="row" role="menu">
      <S.PortfolioButton
        variant="navigation"
        href={portfolioPath}
        aria-current={isPortfolioPath ? "location" : undefined}
        role="menuitem"
      >
        <span data-label>Portfolio</span>
      </S.PortfolioButton>

      <S.AboutButton
        variant="navigation"
        href={aboutPath}
        aria-current={isAboutPath ? "location" : undefined}
        role="menuitem"
      >
        <span data-label>About</span>
      </S.AboutButton>

      <S.SourceButton
        variant="navigation"
        href={sourcePath}
        aria-current={isSourcePath ? "location" : undefined}
        role="menuitem"
      >
        <span data-label>Source</span>
      </S.SourceButton>
    </Stack>
  );
}
