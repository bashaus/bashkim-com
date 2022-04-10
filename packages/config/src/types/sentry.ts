export type SentryConfig = {
  /**
   * Whether or not sentry should be enabled
   */
  enabled: boolean;

  /**
   * The DSN provided by Sentry
   */
  dsn: string;

  /**
   * Identifier for the current release
   */
  release?: string;

  /**
   * The name of the environment to report to Sentry
   */
  environment: string;
};
