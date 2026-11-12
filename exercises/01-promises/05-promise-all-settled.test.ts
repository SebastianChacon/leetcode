import { describe, it, expect, vi } from "vitest";
import { promiseAllSettled } from "./05-promise-all-settled";

describe("05 - promiseAllSettled", () => {
  it("does not use Promise.allSettled", async () => {
    const spy = vi.spyOn(Promise, "allSettled");
    await promiseAllSettled([Promise.resolve(1)]);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it("resolves [] for an empty array", async () => {
    await expect(promiseAllSettled([])).resolves.toEqual([]);
  });

  it("reports fulfilled and rejected results in order", async () => {
    const result = await promiseAllSettled<number>([
      new Promise((r) => setTimeout(() => r(1), 20)),
      Promise.reject(new Error("fail")),
      Promise.resolve(3),
    ]);
    expect(result).toEqual([
      { status: "fulfilled", value: 1 },
      { status: "rejected", reason: new Error("fail") },
      { status: "fulfilled", value: 3 },
    ]);
  });

  it("never rejects even if everything fails", async () => {
    const result = await promiseAllSettled([Promise.reject("a"), Promise.reject("b")]);
    expect(result.every((r) => r.status === "rejected")).toBe(true);
  });
});
