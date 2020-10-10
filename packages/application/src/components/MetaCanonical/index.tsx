import getConfig from "next/config";
import Head from "next/head";
import React from "react";

type MetaCanonicalProps = {
  href?: string;
};

const MetaCanonical = ({ href }: MetaCanonicalProps): JSX.Element | null => {
  const { publicRuntimeConfig: config } = getConfig();

  if (!href) {
    return null;
  }

  const absoluteHref = `${config.sitemap.baseHref}${href}`;

  return (
    <Head>
      <link key="MetaCanonical" rel="canonical" href={absoluteHref} />
    </Head>
  );
};

export default MetaCanonical;
