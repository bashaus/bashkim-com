import { MenuButton } from "@bashkim-com/design-system";
import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

export const MenuButtonHome = (
  <Link href="/" passHref>
    <MenuButton>
      <HomeIcon size="small" aria-label="Back to Homepage" />
    </MenuButton>
  </Link>
);
