import { describe, it, expect, vi } from "vitest";
import { memoize } from "./02-memoize";

describe("02 - memoize", () => {
  it("returns the same result as the original", () => {
    const square = memoize((n: number) => n * n);
    expect(square(4)).toBe(16);
    expect(square(5)).toBe(25);
  });

  it("calls the original only once per unique arguments", () => {
    const spy = vi.fn((a: number, b: number) => a + b);
    const add = memoize(spy);
    add(1, 2);
    add(1, 2);
    add(2, 1);
    add(1, 2);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("does not confuse different argument lists", () => {
    const join = memoize((a: number, b: number) => `${a}-${b}`);
    expect(join(1, 23)).toBe("1-23");
    expect(join(12, 3)).toBe("12-3");
  });

  it("caches falsy results too", () => {
    const spy = vi.fn((_n: number) => 0);
    const zero = memoize(spy);
    zero(1);
    zero(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("each memoized function has its own cache", () => {
    const double = memoize((n: number) => n * 2);
    const triple = memoize((n: number) => n * 3);
    expect(double(3)).toBe(6);
    expect(triple(3)).toBe(9);
  });
});
