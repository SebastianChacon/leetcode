import { describe, it, expect } from "vitest";
import { sleep } from "./01-sleep";

describe("01 - sleep", () => {
  it("returns a Promise", () => {
    expect(sleep(1)).toBeInstanceOf(Promise);
  });

  it("resolves with undefined", async () => {
    await expect(sleep(1)).resolves.toBeUndefined();
  });

  it("waits at least the given time", async () => {
    const start = Date.now();
    await sleep(50);
    expect(Date.now() - start).toBeGreaterThanOrEqual(45);
  });
});
