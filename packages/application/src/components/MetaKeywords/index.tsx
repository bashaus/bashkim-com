import Head from "next/head";

export type MetaKeywordsProps = {
  content?: string;
};

export const MetaKeywords = ({ content }: MetaKeywordsProps) => {
  if (!content) {
    return null;
  }

  return (
    <Head>
      <meta key="MetaKeywords" name="keywords" content={content} />
    </Head>
  );
};
