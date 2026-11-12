import { describe, it, expect } from "vitest";
import { LRUCache } from "./05-lru-cache";

describe("05 - LRUCache", () => {
  it("solves the LeetCode example", () => {
    const cache = new LRUCache<number, number>(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1); // 1 is now most recent
    cache.put(3, 3); // evicts 2
    expect(cache.get(2)).toBeUndefined();
    cache.put(4, 4); // evicts 1
    expect(cache.get(1)).toBeUndefined();
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });

  it("updating a key refreshes it and does not grow the size", () => {
    const cache = new LRUCache<string, string>(2);
    cache.put("a", "1");
    cache.put("b", "2");
    cache.put("a", "updated"); // a is now most recent
    expect(cache.size).toBe(2);
    cache.put("c", "3"); // evicts b
    expect(cache.get("a")).toBe("updated");
    expect(cache.get("b")).toBeUndefined();
    expect(cache.size).toBe(2);
  });

  it("works with capacity 1", () => {
    const cache = new LRUCache<number, string>(1);
    cache.put(1, "one");
    cache.put(2, "two");
    expect(cache.get(1)).toBeUndefined();
    expect(cache.get(2)).toBe("two");
  });
});
