import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

export default function MetaDescription(props) {
  const { content } = props;

  return (
    <Head>
      <meta key="MetaDescription" name="description" content={content} />
      <meta key="MetaDescription.opengraph" property="og:description" content={content} />
      <meta key="MetaDescription.twitter" name="twitter:description" content={content} />
    </Head>
  );
}

MetaDescription.propTypes = {
  content: PropTypes.string.isRequired,
};
