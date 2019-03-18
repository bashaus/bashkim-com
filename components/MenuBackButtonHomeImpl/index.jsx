import Link from 'next/link';
import Octicon, { Home } from '@githubprimer/octicons-react';
import React from 'react';

import MenuBackButton from '%components/MenuBackButton';


export default (
  <MenuBackButton>
    <Link href="/">
      <a>
        <Octicon icon={Home} size="small" ariaLabel="Back to Homepage" />
      </a>
    </Link>
  </MenuBackButton>
);
