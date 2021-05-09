import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";

import { MenuBackButton } from "%components/MenuBackButton";

export const MenuBackButtonHomeImpl = (
  <MenuBackButton>
    <Link href="/">
      <a>
        <HomeIcon size="small" aria-label="Back to Homepage" />
      </a>
    </Link>
  </MenuBackButton>
);
