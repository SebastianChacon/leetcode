import { describe, it, expect } from "vitest";
import { wordFrequency } from "./01-word-frequency";

describe("01 - wordFrequency", () => {
  it("counts words case-insensitively", () => {
    const result = wordFrequency("The cat and the hat.");
    expect(result).toBeInstanceOf(Map);
    expect([...result]).toEqual([
      ["the", 2],
      ["cat", 1],
      ["and", 1],
      ["hat", 1],
    ]);
  });

  it("ignores punctuation and extra whitespace", () => {
    const result = wordFrequency("  Hello,   hello!! WORLD...  don't stop ");
    expect(Object.fromEntries(result)).toEqual({ hello: 2, world: 1, "don't": 1, stop: 1 });
  });

  it("handles tricky keys like 'constructor'", () => {
    expect(wordFrequency("constructor constructor").get("constructor")).toBe(2);
  });

  it("returns an empty Map for empty text", () => {
    expect(wordFrequency("").size).toBe(0);
    expect(wordFrequency("  ...  ").size).toBe(0);
  });
});
