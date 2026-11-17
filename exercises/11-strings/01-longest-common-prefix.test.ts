import { describe, it, expect } from "vitest";
import { longestCommonPrefix } from "./01-longest-common-prefix";

describe("01 - longestCommonPrefix", () => {
  it("solves the LeetCode examples", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  it("returns the string itself when there is only one", () => {
    expect(longestCommonPrefix(["alone"])).toBe("alone");
    expect(longestCommonPrefix([""])).toBe("");
  });

  it("returns the whole string when all strings are identical", () => {
    expect(longestCommonPrefix(["same", "same", "same"])).toBe("same");
  });

  it("is limited by the shortest string", () => {
    expect(longestCommonPrefix(["ab", "a"])).toBe("a");
    expect(longestCommonPrefix(["interview", "inter", "internet"])).toBe("inter");
  });

  it("returns an empty string when any string is empty", () => {
    expect(longestCommonPrefix(["abc", "", "abd"])).toBe("");
  });

  it("detects a mismatch on the very first character", () => {
    expect(longestCommonPrefix(["abc", "abd", "xbc"])).toBe("");
  });

  it("detects a mismatch in a later string, not just the second", () => {
    expect(longestCommonPrefix(["prefix", "prefixes", "preform"])).toBe("pref");
  });
});
