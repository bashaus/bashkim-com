import Head from 'next/head';
import mime from 'mime';
import PropTypes from 'prop-types';
import React from 'react';

const MetaImage = ({ url, width, height }) => {
  if (!url) {
    return null;
  }

  return (
    <Head>
      <meta key="MetaImage.twitter" name="twitter:image" content={url} />
      <meta key="MetaImage.opengraph" property="og:image" content={url} />
      <meta key="MetaImage.opengraph.type" property="og:image:type" content={mime.getType(url)} />
      { width && height && (
        <>
          <meta key="MetaImage.opengraph.width" property="og:image:width" content={width} />
          <meta key="MetaImage.opengraph.height" property="og:image:height" content={height} />
        </>
      ) }
    </Head>
  );
};

MetaImage.propTypes = {
  height: PropTypes.number,
  url: PropTypes.string,
  width: PropTypes.number,
};

MetaImage.defaultProps = {
  height: null,
  url: null,
  width: null,
};

export default MetaImage;
