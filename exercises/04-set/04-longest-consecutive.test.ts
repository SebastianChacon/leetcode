import { describe, it, expect } from "vitest";
import { longestConsecutive } from "./04-longest-consecutive";

describe("04 - longestConsecutive", () => {
  it("solves the LeetCode examples", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });

  it("handles edge cases", () => {
    expect(longestConsecutive([])).toBe(0);
    expect(longestConsecutive([7])).toBe(1);
    expect(longestConsecutive([1, 2, 0, 1])).toBe(3);
    expect(longestConsecutive([-2, -1, 0, 5])).toBe(3);
  });

  it("is O(n) on large input", () => {
    const big = Array.from({ length: 200_000 }, (_, i) => (i * 7919) % 200_000);
    const start = Date.now();
    expect(longestConsecutive(big)).toBe(200_000);
    expect(Date.now() - start).toBeLessThan(1000);
  });
});
