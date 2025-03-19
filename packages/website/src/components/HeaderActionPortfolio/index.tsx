import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";

export default function HeaderActionPortfolio() {
  return (
    <IconButton href="/portfolio">
      <ChevronLeftIcon width={16} height={16} aria-label="Back to Portfolio" />
    </IconButton>
  );
}
