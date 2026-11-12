/**
 * 01 - range generator                               Difficulty: Easy
 *
 * Write a generator that yields numbers from `start` up to (NOT including)
 * `end`, moving by `step` (default 1). Negative steps count down.
 * A step of 0 must throw RangeError (it would loop forever).
 *
 *   [...range(0, 5)];        // [0, 1, 2, 3, 4]
 *   [...range(0, 10, 3)];    // [0, 3, 6, 9]
 *   [...range(5, 0, -2)];    // [5, 3, 1]
 *   for (const n of range(1, 4)) console.log(n); // 1 2 3
 *
 * Generators are LAZY: values are computed only when requested.
 *
 * Concepts: function*, yield, iterables, spread / for...of on generators.
 */
export function* range(start: number, end: number, step = 1): Generator<number> {
  throw new Error("Not implemented");
}
