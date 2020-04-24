import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const MetaDescription = ({ content }) => {
  if (!content) {
    return null;
  }

  return (
    <Head>
      <meta key="MetaDescription" name="description" content={content} />
      <meta key="MetaDescription.opengraph" property="og:description" content={content} />
      <meta key="MetaDescription.twitter" name="twitter:description" content={content} />
    </Head>
  );
};

MetaDescription.propTypes = {
  content: PropTypes.string,
};

MetaDescription.defaultProps = {
  content: null,
};

export default MetaDescription;
