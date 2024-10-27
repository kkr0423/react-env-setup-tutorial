// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./vitest-setup.ts",
  },
});
