import getConfig from 'next/config';
import Head from 'next/head';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

interface MetaCanonicalProps {
  href?: string;
}

const MetaCanonical = ({ href }: MetaCanonicalProps): JSX.Element | null => {
  if (!href) {
    return null;
  }

  const absoluteHref = `${publicRuntimeConfig.sitemap.baseHref}${href}`;

  return (
    <Head>
      <link key="MetaCanonical" rel="canonical" href={absoluteHref} />
    </Head>
  );
};

export default MetaCanonical;
