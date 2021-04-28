import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import svg from "rollup-plugin-svg";
import url from "postcss-url";

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
    postcss({
      extract: false,
      modules: true,
      plugins: [
        url({
          url: "inline",
          maxSize: 10,
          fallback: "copy",
        }),
      ],
      use: ["sass"],
    }),
    svg(),
    nodeResolve(),
    commonjs(),
    typescript(),
  ],
};
