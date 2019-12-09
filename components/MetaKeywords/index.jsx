import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

export default function MetaKeywords(props) {
  const { content } = props;

  if (!content) {
    return null;
  }

  return (
    <Head>
      <meta key="MetaKeywords" name="keywords" content={content} />
    </Head>
  );
}

MetaKeywords.propTypes = {
  content: PropTypes.string,
};

MetaKeywords.defaultProps = {
  content: null,
};
