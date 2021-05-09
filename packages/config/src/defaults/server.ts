import type { ServerConfig } from "types/server";

export const server: ServerConfig = {
  env: process.env.APP_ENV || "production",
  port: +(process.env.PORT || 3000),
};
