import eslintConfig from "@bashkim-com/eslint";
import pluginNext from "@next/eslint-plugin-next";

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
const config = [
  ...eslintConfig.configs.react,
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
  {
    ignores: ["coverage", ".next", "next-env.d.ts"],
  },
];

export default config;
