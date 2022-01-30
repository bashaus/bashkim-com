import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

import { MenuButton } from "%components/MenuButton";

export const MenuButtonHome = (
  <Link href="/" passHref>
    <MenuButton>
      <HomeIcon size="small" aria-label="Back to Homepage" />
    </MenuButton>
  </Link>
);
