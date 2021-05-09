import Link from "next/link";
import { ArrowLeftIcon } from "@primer/octicons-react";

import { MenuBackButton } from "%components/MenuBackButton";

export const MenuBackButtonPortfolioImpl = (
  <MenuBackButton>
    <Link href="/portfolio">
      <a>
        <ArrowLeftIcon size="small" aria-label="Back to Portfolio" />
      </a>
    </Link>
  </MenuBackButton>
);
