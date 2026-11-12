import { describe, it, expect } from "vitest";
import { pipeAsync } from "./05-pipe-async";

describe("05 - pipeAsync", () => {
  it("returns the input when there are no functions", async () => {
    await expect(pipeAsync()(42)).resolves.toBe(42);
  });

  it("runs sync and async functions left to right", async () => {
    const process = pipeAsync(
      (x: number) => x + 1,
      async (x: number) => x * 2,
      (x: number) => `result: ${x}`,
    );
    await expect(process(3)).resolves.toBe("result: 8");
  });

  it("waits for each async step before the next", async () => {
    const order: number[] = [];
    const step = (n: number, ms: number) => async (x: number) => {
      await new Promise((r) => setTimeout(r, ms));
      order.push(n);
      return x + n;
    };
    await expect(pipeAsync(step(1, 30), step(2, 5), step(3, 10))(0)).resolves.toBe(6);
    expect(order).toEqual([1, 2, 3]);
  });

  it("rejects if any step throws", async () => {
    const process = pipeAsync(
      (x: number) => x,
      async () => {
        throw new Error("step failed");
      },
    );
    await expect(process(1)).rejects.toThrow("step failed");
  });
});
