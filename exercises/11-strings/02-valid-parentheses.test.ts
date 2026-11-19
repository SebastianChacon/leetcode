import { describe, it, expect } from "vitest";
import { isValid } from "./02-valid-parentheses";

describe("02 - isValid", () => {
  it("solves the LeetCode examples", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("(]")).toBe(false);
    expect(isValid("([])")).toBe(true);
    expect(isValid("([)]")).toBe(false);
  });

  it("accepts nested brackets", () => {
    expect(isValid("{[]}")).toBe(true);
    expect(isValid("{[()()]}")).toBe(true);
    expect(isValid("((((([]))))){}")).toBe(true);
  });

  it("rejects unclosed open brackets", () => {
    expect(isValid("(")).toBe(false);
    expect(isValid("((")).toBe(false);
    expect(isValid("{[]")).toBe(false);
  });

  it("rejects close brackets with nothing to match", () => {
    expect(isValid(")")).toBe(false);
    expect(isValid("]()")).toBe(false);
    expect(isValid("())")).toBe(false);
  });

  it("rejects brackets in the wrong order", () => {
    expect(isValid(")(")).toBe(false);
    expect(isValid("}{")).toBe(false);
  });

  it("rejects mismatched types even with even length", () => {
    expect(isValid("(}")).toBe(false);
    expect(isValid("[(])")).toBe(false);
  });

  it("handles long inputs", () => {
    const n = 5000;
    expect(isValid("(".repeat(n) + ")".repeat(n))).toBe(true);
    expect(isValid("(".repeat(n) + ")".repeat(n - 1))).toBe(false);
  });
});
