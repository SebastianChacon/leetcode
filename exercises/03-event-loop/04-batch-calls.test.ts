import { describe, it, expect, vi } from "vitest";
import { batchCalls } from "./04-batch-calls";

const nextMacrotask = () => new Promise((r) => setTimeout(r, 0));

describe("04 - batchCalls", () => {
  it("does not call fn synchronously", () => {
    const fn = vi.fn();
    const add = batchCalls(fn);
    add(1);
    add(2);
    expect(fn).not.toHaveBeenCalled();
  });

  it("calls fn once with all items from the same tick", async () => {
    const fn = vi.fn();
    const add = batchCalls<number>(fn);
    add(1);
    add(2);
    add(3);
    await nextMacrotask();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith([1, 2, 3]);
  });

  it("flushes in a microtask (before setTimeout callbacks)", async () => {
    const order: string[] = [];
    const add = batchCalls<string>((items) => order.push(`batch:${items.join(",")}`));
    setTimeout(() => order.push("timeout"), 0);
    add("a");
    add("b");
    await nextMacrotask();
    expect(order).toEqual(["batch:a,b", "timeout"]);
  });

  it("starts a new batch on a later tick", async () => {
    const fn = vi.fn();
    const add = batchCalls<number>(fn);
    add(1);
    await nextMacrotask();
    add(2);
    add(3);
    await nextMacrotask();
    expect(fn.mock.calls).toEqual([[[1]], [[2, 3]]]);
  });
});
