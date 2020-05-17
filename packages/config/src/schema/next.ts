export interface NextConfig {
  dev: boolean;
}

const defaultNextConfig: NextConfig = {
  /**
   * Whether or not to use development mode
   */
  dev: false,
};

export default defaultNextConfig;
