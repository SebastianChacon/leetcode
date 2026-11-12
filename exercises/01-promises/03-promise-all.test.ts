import { describe, it, expect, vi } from "vitest";
import { promiseAll } from "./03-promise-all";

const delay = <T>(ms: number, value: T) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(value), ms));

describe("03 - promiseAll", () => {
  it("does not use Promise.all", async () => {
    const spy = vi.spyOn(Promise, "all");
    await promiseAll([Promise.resolve(1)]);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it("resolves an empty array with []", async () => {
    await expect(promiseAll([])).resolves.toEqual([]);
  });

  it("keeps the input order, not the finish order", async () => {
    const result = await promiseAll([delay(30, "a"), delay(10, "b"), delay(20, "c")]);
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("accepts plain values mixed with promises", async () => {
    await expect(promiseAll<number>([1, Promise.resolve(2), delay(5, 3)])).resolves.toEqual([1, 2, 3]);
  });

  it("rejects with the first rejection reason", async () => {
    const failing = new Promise<number>((_, reject) => setTimeout(() => reject(new Error("boom")), 10));
    await expect(promiseAll([delay(50, 1), failing])).rejects.toThrow("boom");
  });
});
