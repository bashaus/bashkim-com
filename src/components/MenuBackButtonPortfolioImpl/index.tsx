import Link from "next/link";
import Octicon, { ArrowLeft } from "@primer/octicons-react";
import React from "react";

import MenuBackButton from "%components/MenuBackButton";

export default (
  <MenuBackButton>
    <Link href="/portfolio">
      <a>
        <Octicon icon={ArrowLeft} size="small" ariaLabel="Back to Portfolio" />
      </a>
    </Link>
  </MenuBackButton>
);
