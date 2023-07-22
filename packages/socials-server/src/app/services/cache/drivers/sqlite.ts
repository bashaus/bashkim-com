import { caching } from "cache-manager";
import { create as sqliteStore } from "cache-manager-sqlite";

export const createSqliteStore = async () =>
  caching(sqliteStore, {
    name: "socials",
    path: `${__dirname}/sqlite.db`,
    serializer: "json",
    ttl: 60 /* minutes */ * 60 /* seconds */,
  });
