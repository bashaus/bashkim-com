import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";

import { getPortfolioPath } from "@/libraries/app/navigation";

export default function HeaderActionPortfolio() {
  return (
    <IconButton href={getPortfolioPath()}>
      <ChevronLeftIcon width={16} height={16} aria-label="Back to Portfolio" />
    </IconButton>
  );
}
