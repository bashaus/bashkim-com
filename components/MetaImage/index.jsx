import Head from 'next/head';
import mime from 'mime';
import PropTypes from 'prop-types';
import React from 'react';

export default function MetaImage(props) {
  const { image } = props;

  return (
    <Head>
      <meta key="MetaImage.twitter" name="twitter:image" content={image} />
      <meta key="MetaImage.opengraph" property="og:image" content={image} />
      <meta key="MetaImage.opengraph.type" property="og:image:type" content={mime.getType(image)} />
      { /*
      <meta key="MetaImage.opengraph.width" property="og:image:width" content="" />
      <meta key="MetaImage.opengraph.height" property="og:image:height" content="" />
      */ }
    </Head>
  );
}

MetaImage.propTypes = {
  image: PropTypes.string.isRequired,
};
