import { describe, it, expect } from "vitest";
import { processInChunks } from "./05-process-in-chunks";

describe("05 - processInChunks", () => {
  it("returns all results in order", async () => {
    await expect(processInChunks([1, 2, 3, 4, 5], 2, (x) => x * 10)).resolves.toEqual([10, 20, 30, 40, 50]);
  });

  it("handles an empty array", async () => {
    await expect(processInChunks([], 3, (x) => x)).resolves.toEqual([]);
  });

  it("processes the first chunk synchronously, but not everything", () => {
    let processed = 0;
    void processInChunks([1, 2, 3, 4, 5, 6], 2, () => processed++);
    expect(processed).toBe(2);
  });

  it("lets other tasks run between chunks", async () => {
    const log: string[] = [];
    setTimeout(() => log.push("timer"), 0);
    await processInChunks(["a", "b", "c", "d", "e", "f"], 2, (x) => log.push(x));
    expect(log).toEqual(["a", "b", "timer", "c", "d", "e", "f"]);
  });
});
