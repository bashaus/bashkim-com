import { Cache, Store } from "cache-manager";

import { createSqliteStore } from "./drivers/sqlite";

export enum CacheStoreDriver {
  SQLITE = "sqlite",
}

const drivers: Record<CacheStoreDriver, () => Promise<Cache<Store>>> = {
  [CacheStoreDriver.SQLITE]: createSqliteStore,
};

const { APP_SOCIALS_SERVER_CACHE_DRIVER = CacheStoreDriver.SQLITE } =
  process.env;

export const cacheStorePromise = (async () => {
  const currentDriver =
    APP_SOCIALS_SERVER_CACHE_DRIVER in drivers
      ? (APP_SOCIALS_SERVER_CACHE_DRIVER as CacheStoreDriver)
      : CacheStoreDriver.SQLITE; /* fallback */

  console.log("cache driver", currentDriver);

  const driver = drivers[currentDriver];
  return driver();
})();
