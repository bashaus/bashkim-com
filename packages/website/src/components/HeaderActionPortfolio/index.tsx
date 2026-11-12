import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";
import { useLocale, useTranslations } from "next-intl";

import { getPortfolioPath } from "@/libraries/app/navigation";

export default function HeaderActionPortfolio() {
  const locale = useLocale();
  const t = useTranslations("HeaderActionPortfolio");

  return (
    <IconButton href={getPortfolioPath({ locale })}>
      <ChevronLeftIcon width={16} height={16} aria-label={t("iconAriaLabel")} />
    </IconButton>
  );
}
