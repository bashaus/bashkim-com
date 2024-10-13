import { MenuButton } from "@bashkim-com/design-system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";

export const MenuButtonPortfolio = (
  <Link href="/portfolio" passHref>
    <MenuButton>
      <ChevronLeftIcon width={16} height={16} aria-label="Back to Portfolio" />
    </MenuButton>
  </Link>
);
