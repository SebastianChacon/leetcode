import { describe, it, expect } from "vitest";
import { mapWithConcurrency } from "./04-map-with-concurrency";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

describe("04 - mapWithConcurrency", () => {
  it("returns [] for empty input", async () => {
    await expect(mapWithConcurrency([], 2, async (x) => x)).resolves.toEqual([]);
  });

  it("keeps results in input order", async () => {
    const result = await mapWithConcurrency([30, 10, 20, 5], 2, async (ms, i) => {
      await sleep(ms);
      return `${i}:${ms}`;
    });
    expect(result).toEqual(["0:30", "1:10", "2:20", "3:5"]);
  });

  it("never runs more than `limit` at once, but does use the limit", async () => {
    let running = 0;
    let maxRunning = 0;
    await mapWithConcurrency([1, 2, 3, 4, 5, 6, 7, 8], 3, async (x) => {
      running++;
      maxRunning = Math.max(maxRunning, running);
      await sleep(10);
      running--;
      return x;
    });
    expect(maxRunning).toBe(3);
  });

  it("runs faster than sequential", async () => {
    const start = Date.now();
    await mapWithConcurrency([1, 2, 3, 4], 4, () => sleep(40));
    expect(Date.now() - start).toBeLessThan(120);
  });

  it("rejects if a call fails", async () => {
    await expect(
      mapWithConcurrency([1, 2, 3], 2, async (x) => {
        if (x === 2) throw new Error("bad item");
        return x;
      }),
    ).rejects.toThrow("bad item");
  });
});
