import defaultsDeep from "lodash.defaultsdeep";

import "./init";
import type { ConfigType } from "./types";
import { defaultsConfig } from "./defaults";
import { localConfig } from "./environment/local";

const config: ConfigType = defaultsDeep(
  {},
  process.env.APP_ENV === "local" ? localConfig : {},
  defaultsConfig
);

export default config;
