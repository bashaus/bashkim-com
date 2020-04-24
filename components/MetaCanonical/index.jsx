import getConfig from 'next/config';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

const MetaCanonical = ({ href }) => {
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

MetaCanonical.propTypes = {
  href: PropTypes.string,
};

MetaCanonical.defaultProps = {
  href: null,
};

export default MetaCanonical;
