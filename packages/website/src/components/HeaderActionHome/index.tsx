import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { useLocale, useTranslations } from "next-intl";

import { getHomePath } from "@/libraries/app/navigation";

export default function HeaderActionHome() {
  const locale = useLocale();
  const t = useTranslations("HeaderActionHome");

  return (
    <IconButton href={getHomePath({ locale })}>
      <HomeIcon width={16} height={16} aria-label={t("iconAriaLabel")} />
    </IconButton>
  );
}
