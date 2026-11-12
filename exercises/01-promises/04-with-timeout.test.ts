import { describe, it, expect } from "vitest";
import { withTimeout } from "./04-with-timeout";

const delay = <T>(ms: number, value: T) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(value), ms));

describe("04 - withTimeout", () => {
  it("resolves when the promise finishes in time", async () => {
    await expect(withTimeout(delay(10, "ok"), 100)).resolves.toBe("ok");
  });

  it("rejects with Error('Timeout') when too slow", async () => {
    await expect(withTimeout(delay(100, "late"), 20)).rejects.toThrow("Timeout");
  });

  it("propagates the original rejection", async () => {
    await expect(withTimeout(Promise.reject(new Error("original")), 100)).rejects.toThrow("original");
  });
});
