import getConfig from "next/config";
import Head from "next/head";

export type MetaCanonicalProps = {
  href?: string;
};

export const MetaCanonical = ({ href }: MetaCanonicalProps) => {
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
