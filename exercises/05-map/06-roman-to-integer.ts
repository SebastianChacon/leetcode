/**
 * 06 - romanToInt  (LeetCode #13)                    Difficulty: Easy
 *
 * Convert a Roman numeral to an integer.
 *
 *   Symbol  I  V  X   L   C    D    M
 *   Value   1  5  10  50  100  500  1000
 *
 * Symbols are normally written largest to smallest, left to right, and
 * added up: "XII" = 10 + 1 + 1 = 12. But six pairs use SUBTRACTION, where
 * a smaller symbol comes right before a larger one:
 *
 *   IV = 4    IX = 9
 *   XL = 40   XC = 90
 *   CD = 400  CM = 900
 *
 * Example:
 *   romanToInt("III");     // 3
 *   romanToInt("LVIII");   // 58    (L = 50, V = 5, III = 3)
 *   romanToInt("MCMXCIV"); // 1994  (M = 1000, CM = 900, XC = 90, IV = 4)
 *
 * Constraints:
 *   - 1 <= s.length <= 15
 *   - `s` is a valid Roman numeral in the range [1, 3999].
 *
 * Hints:
 *   - Store `symbol -> value` in a Map.
 *   - Walk the string. If the current value is smaller than the NEXT one,
 *     subtract it; otherwise add it.
 *
 * Aim for O(n) time.
 */
const VALUES: Record<string, number> = {
  I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
};

type Roman = "I" | "V" | "X" | "L" | "C" | "D" | "M";

export function romanToInt(s: string): number {
  let total = 0

    for(let i = 0; i < s.length; i++){
      const curr = VALUES[s[i]];
      const next = VALUES[s[i + 1]] ?? 0;
      console.log(`curr ${curr} ==== next ${next}`)

      total += curr < next ? -curr : curr;
      console.log(total)
    }
    return total
}
