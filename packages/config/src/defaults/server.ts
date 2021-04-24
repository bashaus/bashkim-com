import type { ServerConfig } from "types/server";

const defaultServerConfig: ServerConfig = {
  env: process.env.APP_ENV || "production",
  port: +(process.env.PORT || 3000),
};

export default defaultServerConfig;
