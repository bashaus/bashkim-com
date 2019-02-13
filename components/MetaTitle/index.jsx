import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function MetaTitle(props) {
  const { content, standalone } = props;

  const titleText = standalone
    ? content
    : `${content} | Bashkim Isai - Creative Technologist`;

  return (
    <Head>
      <title key="MetaTitle">{titleText}</title>
      <meta key="MetaTitle.opengraph" property="og:title" content="Bashkim Isai" />
      <meta key="MetaTitle.twitter" name="twitter:title" content={content} />
    </Head>
  );
}

MetaTitle.propTypes = {
  content: PropTypes.string.isRequired,
  standalone: PropTypes.bool,
};

MetaTitle.defaultProps = {
  standalone: false,
};
