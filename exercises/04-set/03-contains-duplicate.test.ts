import { describe, it, expect } from "vitest";
import { containsDuplicate } from "./03-contains-duplicate";

describe("03 - containsDuplicate", () => {
  it("detects duplicates", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  it("returns false when all values are unique", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([])).toBe(false);
  });

  it("is fast on large input (O(n))", () => {
    const big = Array.from({ length: 200_000 }, (_, i) => i);
    const start = Date.now();
    expect(containsDuplicate(big)).toBe(false);
    expect(Date.now() - start).toBeLessThan(500);
  });
});
