import { describe, it, expect, vi, afterEach } from "vitest";
import { myMap, myFilter, myReduce, sumOfSquaresOfEvens } from "./05-array-polyfills";

describe("05 - array polyfills", () => {
  afterEach(() => vi.restoreAllMocks());

  it("myMap", () => {
    expect(myMap([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6]);
    expect(myMap(["a", "b"], (x, i) => `${i}${x}`)).toEqual(["0a", "1b"]);
    expect(myMap([], (x) => x)).toEqual([]);
  });

  it("myFilter", () => {
    expect(myFilter([1, 2, 3, 4], (x) => x % 2 === 0)).toEqual([2, 4]);
    expect(myFilter([5, 6, 7], (_, i) => i !== 1)).toEqual([5, 7]);
  });

  it("myReduce with and without an initial value", () => {
    expect(myReduce([1, 2, 3], (acc, x) => acc + x, 0)).toBe(6);
    expect(myReduce([1, 2, 3], (acc, x) => acc + x)).toBe(6);
    expect(myReduce(["a", "b"], (acc, x) => ({ ...acc, [x]: true }), {} as Record<string, boolean>)).toEqual({
      a: true,
      b: true,
    });
    expect(myReduce([] as number[], (acc, x) => acc + x, 10)).toBe(10);
    expect(() => myReduce([] as number[], (acc, x) => acc + x)).toThrow(TypeError);
  });

  it("does not use the built-in methods", () => {
    const spies = (["map", "filter", "reduce", "forEach"] as const).map((m) => vi.spyOn(Array.prototype, m));
    myMap([1], (x) => x);
    myFilter([1], () => true);
    myReduce([1, 2], (a, b) => a + b);
    const callCounts: number[] = [];
    for (const s of spies) callCounts.push(s.mock.calls.length);
    vi.restoreAllMocks();
    expect(callCounts).toEqual([0, 0, 0, 0]);
  });

  it("sumOfSquaresOfEvens", () => {
    expect(sumOfSquaresOfEvens([1, 2, 3, 4])).toBe(20);
    expect(sumOfSquaresOfEvens([1, 3])).toBe(0);
    expect(sumOfSquaresOfEvens([])).toBe(0);
  });
});
