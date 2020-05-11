export interface SentryConfig {
  enabled: boolean;
  dsn: string;
  project: string;
  commit?: string;
  environment: string;
}

const defaultSentryConfig: SentryConfig = {
  /**
   * Whether or not sentry should be enabled
   */
  enabled: true,

  /**
   * The DSN provided by Sentry
   */
  dsn: "https://bff95320ff2549e5b4dc6f74860b3859@sentry.io/1408337",

  /**
   * The name of the project in Sentry (used for releases)
   */
  project: "bashkim-com",

  /**
   * Identifier for the current release
   */
  commit: process.env.GIT_COMMIT || undefined,

  /**
   * The name of the environment to report to Sentry
   */
  environment: process.env.APP_ENV || "production",
};

export default defaultSentryConfig;
