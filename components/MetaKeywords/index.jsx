import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function MetaKeywords(props) {
  const { content } = props;

  return (
    <Head>
      <meta key="MetaKeywords" name="keywords" content={content} />
    </Head>
  );
}

MetaKeywords.propTypes = {
  content: PropTypes.string.isRequired,
};
