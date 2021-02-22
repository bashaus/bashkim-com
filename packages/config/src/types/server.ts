export type ServerConfig = {
  /**
   * The current environment
   */
  env: string;

  /**
   * The port to bind
   */
  port: number;

  /**
   * Whether or not the server is running on AWS Lambda
   */
  lambda: boolean;
};
