import { describe, it, expect } from "vitest";
import { range } from "./01-range";

describe("01 - range", () => {
  it("counts up", () => {
    expect([...range(0, 5)]).toEqual([0, 1, 2, 3, 4]);
    expect([...range(0, 10, 3)]).toEqual([0, 3, 6, 9]);
  });

  it("counts down with a negative step", () => {
    expect([...range(5, 0, -2)]).toEqual([5, 3, 1]);
  });

  it("is empty when the range is empty", () => {
    expect([...range(3, 3)]).toEqual([]);
    expect([...range(5, 0)]).toEqual([]);
  });

  it("is lazy", () => {
    const gen = range(0, Number.MAX_SAFE_INTEGER);
    expect(gen.next()).toEqual({ value: 0, done: false });
    expect(gen.next()).toEqual({ value: 1, done: false });
  });

  it("throws on step 0", () => {
    expect(() => [...range(0, 5, 0)]).toThrow(RangeError);
  });
});
