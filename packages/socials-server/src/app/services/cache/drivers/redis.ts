import { caching } from "cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";

export const createRedisStore = async () => {
  return caching(redisStore, {
    host: process.env["APP_SOCIALS_SERVER_REDIS_HOST"],
    port: 6379,
    connectTimeout: 1000,

    /**
     * TTL for sqlite is in seconds
     */
    ttl: 60 /* minutes */ * 60 /* seconds */ * 1000 /* milliseconds */,
  });
};
