/**
 * 04 - groupBy                                       Difficulty: Easy
 *
 * Group items into a Map using the key returned by `keyFn`.
 * Keys can be ANY type (numbers, booleans, objects...) — that's the power
 * of Map over plain objects. Don't use the built-in Map.groupBy.
 *
 * Example:
 *   groupBy([1, 2, 3, 4, 5], (n) => n % 2 === 0);
 *   // Map { false => [1, 3, 5], true => [2, 4] }
 *
 *   groupBy(users, (u) => u.role);
 *   // Map { "admin" => [...], "user" => [...] }
 *
 * Concepts: generics with two type params <T, K>, Map with non-string keys.
 */
export function groupBy<T, K>(items: T[], keyFn: (item: T) => K): Map<K, T[]> {
  throw new Error("Not implemented");
}
