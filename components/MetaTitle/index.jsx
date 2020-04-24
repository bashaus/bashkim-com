import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const MetaTitle = ({ content, standalone }) => {
  const titleText = standalone
    ? content
    : `${content} | Bashkim Isai - Creative Technologist`;

  return (
    <Head>
      <title key="MetaTitle">{titleText}</title>
      <meta key="MetaTitle.twitter" name="twitter:title" content={content} />
      { !standalone && (
        <meta key="MetaTitle.opengraph" property="og:title" content={content} />
      ) }
    </Head>
  );
};

MetaTitle.propTypes = {
  content: PropTypes.string.isRequired,
  standalone: PropTypes.bool,
};

MetaTitle.defaultProps = {
  standalone: false,
};

export default MetaTitle;
