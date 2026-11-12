import { describe, it, expect } from "vitest";
import { groupAnagrams } from "./03-group-anagrams";

describe("03 - groupAnagrams", () => {
  it("solves the LeetCode example", () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["eat", "tea", "ate"],
      ["tan", "nat"],
      ["bat"],
    ]);
  });

  it("handles edge cases", () => {
    expect(groupAnagrams([])).toEqual([]);
    expect(groupAnagrams([""])).toEqual([[""]]);
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
    expect(groupAnagrams(["ab", "ba", "abc"])).toEqual([["ab", "ba"], ["abc"]]);
  });
});
