import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";

import packageJson from "./package.json";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      globals: { react: "React" },
    },
    {
      file: packageJson.module,
      format: "esm",
      globals: { react: "React" },
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    json(),
    typescript(),
  ],
};
