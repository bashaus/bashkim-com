import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

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
