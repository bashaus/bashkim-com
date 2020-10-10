export type PrismicConfig = {
  apiEndpoint: string;
  accessToken?: string;
};

const defaultPrismicConfig: PrismicConfig = {
  /**
   * The URL endpoint as provided by Prismic
   */
  apiEndpoint: "https://bashkim-com.cdn.prismic.io/api/v2",

  /**
   * The access token for accessing Prismic
   */
  accessToken: undefined,
};

export default defaultPrismicConfig;
