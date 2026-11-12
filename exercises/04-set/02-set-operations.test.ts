import { describe, it, expect, vi } from "vitest";
import { union, intersection, difference } from "./02-set-operations";

describe("02 - set operations", () => {
  const a = new Set([1, 2, 3]);
  const b = new Set([2, 3, 4]);

  it("union", () => {
    expect(union(a, b)).toEqual(new Set([1, 2, 3, 4]));
  });

  it("intersection", () => {
    expect(intersection(a, b)).toEqual(new Set([2, 3]));
    expect(intersection(a, new Set([9]))).toEqual(new Set());
  });

  it("difference", () => {
    expect(difference(a, b)).toEqual(new Set([1]));
    expect(difference(b, a)).toEqual(new Set([4]));
  });

  it("does not mutate the inputs", () => {
    union(a, b);
    intersection(a, b);
    difference(a, b);
    expect(a).toEqual(new Set([1, 2, 3]));
    expect(b).toEqual(new Set([2, 3, 4]));
  });

  it("does not use the built-in Set methods", () => {
    const proto = Set.prototype as unknown as Record<string, unknown>;
    const names = ["union", "intersection", "difference"].filter((n) => typeof proto[n] === "function");
    const spies = names.map((n) => vi.spyOn(proto as Record<string, () => unknown>, n));
    union(a, b);
    intersection(a, b);
    difference(a, b);
    spies.forEach((s) => {
      expect(s).not.toHaveBeenCalled();
      s.mockRestore();
    });
  });
});
