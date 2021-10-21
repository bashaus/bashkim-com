import "./init";

import defaultsDeep from "defaults-deep-ts";

import { defaultsConfig } from "./defaults";
import { localConfig } from "./environment/local";
import type { ConfigType } from "./types";

export const config: ConfigType = defaultsDeep(
  process.env.APP_ENV === "local" ? localConfig : {},
  defaultsConfig
);
