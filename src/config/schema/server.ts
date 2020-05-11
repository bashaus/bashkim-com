export interface ServerConfig {
  env: string;
  port: number;
  lambda: boolean;
}

const defaultServerConfig: ServerConfig = {
  /**
   * The current environment
   */
  env: process.env.APP_ENV || "production",

  /**
   * The port to bind
   */
  port: +(process.env.PORT || 3000),

  /**
   * Whether or not the server is running on AWS Lambda
   */
  lambda: !!process.env.LAMBDA_TASK_ROOT,
};

export default defaultServerConfig;
