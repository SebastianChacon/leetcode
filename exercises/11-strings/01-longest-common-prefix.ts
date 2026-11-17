/**
 * 01 - longestCommonPrefix  (LeetCode #14)            Difficulty: Easy
 *
 * Write a function that finds the longest common prefix shared by every
 * string in an array. If there is no common prefix, return "".
 *
 * Example:
 *   longestCommonPrefix(["flower", "flow", "flight"]); // "fl"
 *   longestCommonPrefix(["dog", "racecar", "car"]);    // ""  (no common prefix)
 *
 * Constraints:
 *   - 1 <= strs.length <= 200
 *   - 0 <= strs[i].length <= 200
 *   - strs[i] consists of only lowercase English letters (if non-empty).
 *
 * Hints:
 *   - Vertical scan: check character `i` of the FIRST string against
 *     character `i` of every other string. Stop at the first mismatch, or
 *     when any string runs out of characters.
 *   - Alternative (horizontal scan): start with `prefix = strs[0]` and keep
 *     shortening it until `str.startsWith(prefix)` holds for every string.
 *   - Bonus: sort the array. Now you only need to compare the first and
 *     last strings. Why does that work?
 *
 * Aim for O(S) time, where S is the total number of characters.
 */
export function longestCommonPrefix(strs: string[]): string {
  const first = strs[0];

  for (let i = 0; i < first.length; i++) {
    for (const s of strs) {
      if (i === s.length || s[i] !== first[i]) {
        return first.slice(0, i);
      }
    }
  }
  return first;
}
