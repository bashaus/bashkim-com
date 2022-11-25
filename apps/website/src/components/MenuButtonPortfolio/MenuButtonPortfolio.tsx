import { MenuButton } from "@bashkim-com/design-system";
import { ArrowLeftIcon } from "@primer/octicons-react";
import Link from "next/link";

export const MenuButtonPortfolio = (
  <Link href="/portfolio" passHref>
    <MenuButton>
      <ArrowLeftIcon size="small" aria-label="Back to Portfolio" />
    </MenuButton>
  </Link>
);
