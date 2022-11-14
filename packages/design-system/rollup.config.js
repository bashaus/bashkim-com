const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");
const nodeResolve = require("@rollup/plugin-node-resolve");
const svgr = require("@svgr/rollup");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const typescript = require("rollup-plugin-typescript2");

const packageJson = require("./package.json");

module.exports = {
  input: "./src/index.ts",
  output: {
    file: packageJson.module,
    format: "esm",
    globals: { react: "React" },
  },
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    json(),
    svgr(),
    nodeResolve(),
    commonjs(),
    typescript(),
  ],
};
