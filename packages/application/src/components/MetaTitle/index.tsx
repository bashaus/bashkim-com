import Head from "next/head";

export type MetaTitleProps = {
  content?: string;
  standalone?: boolean;
};

export const MetaTitle = ({ content, standalone = false }: MetaTitleProps) => {
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
