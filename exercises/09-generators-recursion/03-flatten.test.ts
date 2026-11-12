import { describe, it, expect, vi } from "vitest";
import { flatten } from "./03-flatten";

describe("03 - flatten", () => {
  it("flattens any depth by default", () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([[["a"]], "b"])).toEqual(["a", "b"]);
    expect(flatten([])).toEqual([]);
    expect(flatten([[], [[]]])).toEqual([]);
  });

  it("respects the depth argument", () => {
    expect(flatten([1, [2, [3, [4]]]], 1)).toEqual([1, 2, [3, [4]]]);
    expect(flatten([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
    expect(flatten([1, [2]], 0)).toEqual([1, [2]]);
  });

  it("does not use Array.prototype.flat", () => {
    const spy = vi.spyOn(Array.prototype, "flat");
    flatten([1, [2, [3]]]);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});
