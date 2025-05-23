import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "node",
      globals: true,
      coverage: {
        provider: "istanbul",
        reporter: ["text", "json", "html"],
        enabled: true,
      },
    },
  })
);
