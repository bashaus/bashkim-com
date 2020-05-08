import Head from 'next/head';
import React from 'react';

import config from '%config/index';

interface MetaCanonicalProps {
  href?: string;
}

const MetaCanonical = ({ href }: MetaCanonicalProps): JSX.Element | null => {
  if (!href) {
    return null;
  }

  const absoluteHref = `${config.sitemap.baseHref}${href}`;

  return (
    <Head>
      <link key="MetaCanonical" rel="canonical" href={absoluteHref} />
    </Head>
  );
};

export default MetaCanonical;
