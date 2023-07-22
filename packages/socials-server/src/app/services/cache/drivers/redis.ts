import { caching } from "cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";

export const createRedisStore = async () =>
  caching(redisStore, {
    host: process.env["APP_SOCIALS_SERVER_REDIS_HOST"],
    port: 6379,
    ttl: 60 /* minutes */ * 60 /* seconds */,
  });
