import { ArrowLeftIcon } from "@primer/octicons-react";
import Link from "next/link";

import { MenuButton } from "%components/MenuButton";

export const MenuButtonPortfolio = (
  <Link href="/portfolio" passHref>
    <MenuButton>
      <ArrowLeftIcon size="small" aria-label="Back to Portfolio" />
    </MenuButton>
  </Link>
);
