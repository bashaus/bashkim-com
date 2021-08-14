import type { ServerConfig } from "types/server";

export const server: ServerConfig = {
  env: process.env.APP_ENV || "production",
};
