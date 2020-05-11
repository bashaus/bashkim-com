import Head from "next/head";
import React from "react";

interface MetaTitleProps {
  content?: string;
  standalone?: boolean;
}

const MetaTitle = ({
  content,
  standalone = false,
}: MetaTitleProps): JSX.Element => {
  const titleText = standalone
    ? content
    : `${content} | Bashkim Isai - Creative Technologist`;

  return (
    <Head>
      <title key="MetaTitle">{titleText}</title>
      <meta key="MetaTitle.twitter" name="twitter:title" content={content} />
      {!standalone && (
        <meta key="MetaTitle.opengraph" property="og:title" content={content} />
      )}
    </Head>
  );
};

export default MetaTitle;
