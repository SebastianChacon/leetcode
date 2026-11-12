import { describe, it, expect } from "vitest";
import { runSequentially } from "./03-run-sequentially";

describe("03 - runSequentially", () => {
  it("returns [] for no tasks", async () => {
    await expect(runSequentially([])).resolves.toEqual([]);
  });

  it("runs tasks one at a time, in order", async () => {
    const log: string[] = [];
    const task = (name: string, ms: number) => async () => {
      log.push(`start ${name}`);
      await new Promise((r) => setTimeout(r, ms));
      log.push(`end ${name}`);
      return name;
    };
    const result = await runSequentially([task("a", 30), task("b", 10), task("c", 20)]);
    expect(result).toEqual(["a", "b", "c"]);
    expect(log).toEqual(["start a", "end a", "start b", "end b", "start c", "end c"]);
  });

  it("does not start tasks before calling them", async () => {
    let started = 0;
    const tasks = [1, 2, 3].map((n) => async () => {
      started++;
      return n;
    });
    const p = runSequentially(tasks);
    expect(started).toBeLessThanOrEqual(1);
    await p;
    expect(started).toBe(3);
  });
});
