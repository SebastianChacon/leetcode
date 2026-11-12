/**
 * 02 - Set operations                                Difficulty: Easy
 *
 * Implement the three classic set operations. Return NEW Sets
 * (don't mutate the inputs), WITHOUT using the new built-in
 * Set.prototype.union/intersection/difference methods.
 *
 *   union({1,2,3}, {3,4})        -> {1,2,3,4}
 *   intersection({1,2,3}, {2,3,4}) -> {2,3}
 *   difference({1,2,3}, {2})     -> {1,3}   (in a but NOT in b)
 *
 * Concepts: Set.has (O(1)), iterating a Set, filter on spread.
 */
export function union<T>(a: Set<T>, b: Set<T>): Set<T> {
  throw new Error("Not implemented");
}

export function intersection<T>(a: Set<T>, b: Set<T>): Set<T> {
  throw new Error("Not implemented");
}

export function difference<T>(a: Set<T>, b: Set<T>): Set<T> {
  throw new Error("Not implemented");
}
