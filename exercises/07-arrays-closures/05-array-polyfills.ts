/**
 * 05 - Build your own map / filter / reduce          Difficulty: Medium
 *
 * Implement these WITHOUT using Array.prototype.map/filter/reduce/forEach.
 * Use plain `for` loops. Callbacks receive (item, index, array).
 *
 *   myMap([1, 2, 3], (x) => x * 2);                  // [2, 4, 6]
 *   myFilter([1, 2, 3, 4], (x) => x % 2 === 0);      // [2, 4]
 *   myReduce([1, 2, 3], (acc, x) => acc + x, 0);     // 6
 *   myReduce([1, 2, 3], (acc, x) => acc + x);        // 6 (no initial: use arr[0])
 *   myReduce([], (acc, x) => acc + x);               // throws TypeError
 *
 * Then use YOUR functions to solve:
 *   sumOfSquaresOfEvens([1, 2, 3, 4]) // 2² + 4² = 20
 *
 * Concepts: how higher-order functions work under the hood, generics.
 */
export function myMap<T, R>(arr: T[], fn: (item: T, index: number, array: T[]) => R): R[] {
  throw new Error("Not implemented");
}

export function myFilter<T>(arr: T[], fn: (item: T, index: number, array: T[]) => boolean): T[] {
  throw new Error("Not implemented");
}

export function myReduce<T, A = T>(
  arr: T[],
  fn: (acc: A, item: T, index: number, array: T[]) => A,
  initial?: A,
): A {
  throw new Error("Not implemented");
}

export function sumOfSquaresOfEvens(nums: number[]): number {
  throw new Error("Not implemented");
}
