import React from 'react';
import Link from 'next/link';
import Octicon, { ArrowLeft } from '@githubprimer/octicons-react';

import MenuBackButton from '%components/MenuBackButton';

export default (
  <MenuBackButton>
    <Link href="/portfolio">
      <a>
        <Octicon icon={ArrowLeft} size="small" ariaLabel="Back to Portfolio" />
      </a>
    </Link>
  </MenuBackButton>
);
