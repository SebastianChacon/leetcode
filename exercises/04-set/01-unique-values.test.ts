import { describe, it, expect } from "vitest";
import { uniqueValues } from "./01-unique-values";

describe("01 - uniqueValues", () => {
  it("removes duplicate numbers keeping first-occurrence order", () => {
    expect(uniqueValues([3, 1, 3, 2, 1])).toEqual([3, 1, 2]);
  });

  it("works with strings and empty arrays", () => {
    expect(uniqueValues(["a", "b", "a", "c", "b"])).toEqual(["a", "b", "c"]);
    expect(uniqueValues([])).toEqual([]);
  });

  it("compares objects by reference", () => {
    const obj = { a: 1 };
    expect(uniqueValues([obj, obj, { a: 1 }])).toHaveLength(2);
  });

  it("does not mutate the input", () => {
    const input = [1, 1, 2];
    uniqueValues(input);
    expect(input).toEqual([1, 1, 2]);
  });
});
