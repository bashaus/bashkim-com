import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,

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
