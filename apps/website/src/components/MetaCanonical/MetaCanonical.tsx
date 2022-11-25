import Head from "next/head";

export type MetaCanonicalProps = {
  href?: string;
};

export const MetaCanonical = ({ href }: MetaCanonicalProps) => {
  if (!href) {
    return null;
  }

  const baseHref = process.env.NEXT_PUBLIC_BASE_HREF;
  const absoluteHref = `${baseHref}${href}`;

  return (
    <Head>
      <link key="MetaCanonical" rel="canonical" href={absoluteHref} />
    </Head>
  );
};
