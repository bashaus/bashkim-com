export interface GoogleAnalyticsConfig {
  enabled: boolean;
  ua: string;
}

const defaultGoogleAnalyticsConfig: GoogleAnalyticsConfig = {
  /**
   * Whether or not to enable google analytics
   */
  enabled: true,

  /**
   * The UA for the Google Analytics property
   */
  ua: "UA-22533062-1",
};

export default defaultGoogleAnalyticsConfig;
