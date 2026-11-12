import { describe, it, expect } from "vitest";
import { twoSum } from "./02-two-sum";

describe("02 - twoSum", () => {
  it("solves the LeetCode examples", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("works with negatives and zero", () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });

  it("is O(n) on large input", () => {
    const n = 200_000;
    const nums = Array.from({ length: n }, (_, i) => i);
    const start = Date.now();
    expect(twoSum(nums, n * 2 - 3)).toEqual([n - 2, n - 1]);
    expect(Date.now() - start).toBeLessThan(500);
  });
});
