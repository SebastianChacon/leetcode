import { describe, it, expect, vi } from "vitest";
import { retry } from "./02-retry";

describe("02 - retry", () => {
  it("returns immediately when the first call succeeds", async () => {
    const fn = vi.fn().mockResolvedValue("ok");
    await expect(retry(fn, 3)).resolves.toBe("ok");
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("retries until it succeeds", async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("1"))
      .mockRejectedValueOnce(new Error("2"))
      .mockResolvedValue("third time");
    await expect(retry(fn, 5)).resolves.toBe("third time");
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it("rejects with the LAST error after all attempts fail", async () => {
    let n = 0;
    const fn = vi.fn(async () => {
      n++;
      throw new Error(`fail ${n}`);
    });
    await expect(retry(fn, 3)).rejects.toThrow("fail 3");
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it("waits delayMs between attempts", async () => {
    const fn = vi.fn().mockRejectedValueOnce(new Error("x")).mockResolvedValue("ok");
    const start = Date.now();
    await retry(fn, 2, 40);
    expect(Date.now() - start).toBeGreaterThanOrEqual(35);
  });
});
