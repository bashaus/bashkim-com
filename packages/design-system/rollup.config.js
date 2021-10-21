import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import svgr from "@svgr/rollup";
import url from "postcss-url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import svg from "rollup-plugin-svg";
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
    postcss({
      extract: false,
      modules: {
        generateScopedName: "ds___[local]___[hash:base64:5]",
      },
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
    svgr(),
    nodeResolve(),
    commonjs(),
    typescript(),
  ],
};
