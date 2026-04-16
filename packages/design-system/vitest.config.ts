import react from "@vitejs/plugin-react";
import svg from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), svg({ include: ["**/*.svg"] })],

  test: {
    globals: true,
    environment: "jsdom",

    include: ["src/**/*.spec.{ts,tsx}"],

    coverage: {
      enabled: true,
      clean: true,
      reporter: ["lcov"],
      include: ["src/**/*.{ts,tsx}"],
    },

    setupFiles: ["./vitest.setup.ts"],
  },
});
