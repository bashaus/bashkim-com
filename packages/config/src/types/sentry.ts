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
   * The name of the project in Sentry (used for releases)
   */
  project: string;

  /**
   * Identifier for the current release
   */
  commit?: string;

  /**
   * The name of the environment to report to Sentry
   */
  environment: string;
};
