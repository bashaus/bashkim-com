import Head from "next/head";

type MetaDescriptionProps = {
  content?: string;
};

const MetaDescription = ({
  content,
}: MetaDescriptionProps): JSX.Element | null => {
  if (!content) {
    return null;
  }

  return (
    <Head>
      <meta key="MetaDescription" name="description" content={content} />
      <meta
        key="MetaDescription.opengraph"
        property="og:description"
        content={content}
      />
      <meta
        key="MetaDescription.twitter"
        name="twitter:description"
        content={content}
      />
    </Head>
  );
};

export default MetaDescription;
