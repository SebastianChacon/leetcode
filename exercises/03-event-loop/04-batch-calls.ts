/**
 * 04 - batchCalls                                    Difficulty: Medium
 *
 * Return a function `add(item)`. All calls made during the SAME synchronous
 * run are collected, and `fn` is called ONCE with all of them, in a
 * MICROTASK (so before any setTimeout callback, but not synchronously).
 *
 * Calls made later (in a new tick) start a new batch.
 *
 * Example:
 *   const add = batchCalls((items) => console.log(items));
 *   add(1); add(2); add(3);
 *   // nothing logged yet...
 *   // then (microtask): [1, 2, 3]
 *
 * This is how React batches state updates, and how DataLoader batches
 * DB queries.
 *
 * Concepts: queueMicrotask / Promise.resolve().then, flags, closures.
 */
export function batchCalls<T>(fn: (items: T[]) => void): (item: T) => void {
  throw new Error("Not implemented");
}
