import { describe, it, expect, vi } from "vitest";
import { deepClone } from "./04-deep-clone";

describe("04 - deepClone", () => {
  it("returns primitives as is", () => {
    expect(deepClone(5)).toBe(5);
    expect(deepClone("x")).toBe("x");
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  it("deep-copies nested objects and arrays", () => {
    const original = { a: 1, nested: { list: [1, { deep: true }] }, missing: undefined };
    const copy = deepClone(original);
    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy.nested).not.toBe(original.nested);
    expect(copy.nested.list[1]).not.toBe(original.nested.list[1]);
    copy.nested.list.push(99);
    expect(original.nested.list).toHaveLength(2);
    expect("missing" in copy).toBe(true);
  });

  it("clones Date, Map and Set", () => {
    const original = {
      when: new Date("2024-01-01"),
      map: new Map([["k", { v: 1 }]]),
      set: new Set([1, 2]),
    };
    const copy = deepClone(original);
    expect(copy.when).toBeInstanceOf(Date);
    expect(copy.when.getTime()).toBe(original.when.getTime());
    expect(copy.when).not.toBe(original.when);
    expect(copy.map).toBeInstanceOf(Map);
    expect(copy.map.get("k")).toEqual({ v: 1 });
    expect(copy.map.get("k")).not.toBe(original.map.get("k"));
    expect(copy.set).toEqual(new Set([1, 2]));
    expect(copy.set).not.toBe(original.set);
  });

  it("does not use structuredClone or JSON", () => {
    const s1 = vi.spyOn(globalThis, "structuredClone");
    const s2 = vi.spyOn(JSON, "stringify");
    deepClone({ a: [1, { b: 2 }] });
    expect(s1).not.toHaveBeenCalled();
    expect(s2).not.toHaveBeenCalled();
    vi.restoreAllMocks();
  });

  it("BONUS: handles circular references", () => {
    type Node = { name: string; self?: Node; children: Node[] };
    const root: Node = { name: "root", children: [] };
    root.self = root;
    root.children.push(root);
    const copy = deepClone(root);
    expect(copy).not.toBe(root);
    expect(copy.self).toBe(copy);
    expect(copy.children[0]).toBe(copy);
  });
});
