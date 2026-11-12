import { describe, it, expect } from "vitest";
import { lengthOfLongestSubstring } from "./05-longest-substring";

describe("05 - lengthOfLongestSubstring", () => {
  it("solves the LeetCode examples", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it("handles edge cases", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
    expect(lengthOfLongestSubstring(" ")).toBe(1);
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
    expect(lengthOfLongestSubstring("abba")).toBe(2);
  });
});
