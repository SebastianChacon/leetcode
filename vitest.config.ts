import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["exercises/**/*.test.ts"],
    // Type-level exercises (06-type-system) are checked by the TypeScript compiler.
    typecheck: {
      enabled: true,
      include: ["exercises/06-type-system/**/*.test.ts"],
    },
  },
});
