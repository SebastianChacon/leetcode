/**
 * 03 - flatten (recursion)                           Difficulty: Easy
 *
 * Flatten a nested array of any depth. Do NOT use Array.prototype.flat.
 *
 *   flatten([1, [2, [3, [4]], 5]]);     // [1, 2, 3, 4, 5]
 *   flatten([[["a"]], "b"]);            // ["a", "b"]
 *
 * Optional `depth` (default Infinity) limits how many levels to flatten:
 *   flatten([1, [2, [3, [4]]]], 1);     // [1, 2, [3, [4]]]
 *
 * Every recursion needs: a BASE CASE (not an array -> keep it) and a
 * RECURSIVE CASE (an array -> flatten its children with depth - 1).
 *
 * Concepts: recursion, recursive types (NestedArray<T>), Array.isArray.
 */
export type NestedArray<T> = (T | NestedArray<T>)[];

export function flatten<T>(arr: NestedArray<T>, depth = Infinity): (T | NestedArray<T>)[] {
  throw new Error("Not implemented");
}
