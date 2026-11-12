import Stack from "@mui/material/Stack";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import {
  getAboutPath,
  getPortfolioPath,
  getSourcePath,
} from "@/libraries/app/navigation";

import * as S from "./styles";

export default function HeaderPrimary() {
  const locale = useLocale();
  const t = useTranslations("HeaderPrimary");

  const pathname = usePathname();

  const portfolioPath = getPortfolioPath({ locale });
  const isPortfolioPath = pathname.startsWith(portfolioPath);

  const aboutPath = getAboutPath({ locale });
  const isAboutPath = pathname.startsWith(aboutPath);

  const sourcePath = getSourcePath({ locale });
  const isSourcePath = pathname.startsWith(sourcePath);

  return (
    <Stack direction="row" role="menu">
      <S.PortfolioButton
        variant="navigation"
        href={portfolioPath}
        aria-current={isPortfolioPath ? "location" : undefined}
        role="menuitem"
      >
        <span data-label>{t("portfolioButtonLabel")}</span>
      </S.PortfolioButton>

      <S.AboutButton
        variant="navigation"
        href={aboutPath}
        aria-current={isAboutPath ? "location" : undefined}
        role="menuitem"
      >
        <span data-label>{t("aboutButtonLabel")}</span>
      </S.AboutButton>

      <S.SourceButton
        variant="navigation"
        href={sourcePath}
        aria-current={isSourcePath ? "location" : undefined}
        role="menuitem"
      >
        <span data-label>{t("sourceButtonLabel")}</span>
      </S.SourceButton>
    </Stack>
  );
}
