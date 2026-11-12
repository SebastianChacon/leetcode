/**
 * 05 - lengthOfLongestSubstring  (LeetCode #3)       Difficulty: Medium
 *
 * Return the length of the longest substring WITHOUT repeating characters.
 *
 * Example:
 *   lengthOfLongestSubstring("abcabcbb"); // 3  ("abc")
 *   lengthOfLongestSubstring("bbbbb");    // 1  ("b")
 *   lengthOfLongestSubstring("pwwkew");   // 3  ("wke")
 *
 * Hint: "sliding window". Keep a Set of chars in the current window.
 * Move `right` forward; while s[right] is already in the Set, remove
 * s[left] and move `left` forward.
 */
export function lengthOfLongestSubstring(s: string): number {
  throw new Error("Not implemented");
}
