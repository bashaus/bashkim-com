import Head from "next/head";
import React from "react";

type MetaKeywordsProps = {
  content?: string;
};

const MetaKeywords = ({ content }: MetaKeywordsProps): JSX.Element | null => {
  if (!content) {
    return null;
  }

  return (
    <Head>
      <meta key="MetaKeywords" name="keywords" content={content} />
    </Head>
  );
};

export default MetaKeywords;
