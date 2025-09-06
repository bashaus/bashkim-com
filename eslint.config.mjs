// @ts-check

import eslintConfig from "@bashkim-com/eslint";
import { defineConfig } from "eslint/config";

export default defineConfig(eslintConfig.configs.base, {
  ignores: ["coverage/*", "packages/*", ".lighthouserc.cjs"],
});
