export type PrismicConfig = {
  uri: string;
};

const defaultPrismicConfig: PrismicConfig = {
  /**
   * The URL endpoint as provided by Prismic
   */
  uri: "https://bashkim-com.prismic.io/graphql",
};

export default defaultPrismicConfig;
