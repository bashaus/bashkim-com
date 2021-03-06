import Head from "next/head";
import mime from "mime";
import React from "react";

type MetaImageProps = {
  width?: number;
  height?: number;
  url?: string;
};

const MetaImage = ({
  url,
  width,
  height,
}: MetaImageProps): JSX.Element | null => {
  if (!url) {
    return null;
  }

  return (
    <Head>
      <meta key="MetaImage.twitter" name="twitter:image" content={url} />
      <meta key="MetaImage.opengraph" property="og:image" content={url} />
      <meta
        key="MetaImage.opengraph.type"
        property="og:image:type"
        content={mime.getType(url) as string}
      />
      {width && height && (
        <>
          <meta
            key="MetaImage.opengraph.width"
            property="og:image:width"
            content={`${width}`}
          />
          <meta
            key="MetaImage.opengraph.height"
            property="og:image:height"
            content={`${height}`}
          />
        </>
      )}
    </Head>
  );
};

export default MetaImage;
