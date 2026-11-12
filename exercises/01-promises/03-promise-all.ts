/**
 * 03 - promiseAll (build your own Promise.all)       Difficulty: Medium
 *
 * Implement `promiseAll` WITHOUT using Promise.all / Promise.allSettled.
 *
 *   - Resolves with an array of results in the SAME ORDER as the input
 *     (not the order they finish!).
 *   - Rejects as soon as ANY promise rejects, with that reason.
 *   - An empty array resolves immediately with [].
 *   - Input values may be plain values (not promises) too.
 *
 * Example:
 *   await promiseAll([Promise.resolve(1), 2, sleep(10).then(() => 3)]); // [1, 2, 3]
 *
 * Concepts: Promise constructor, counting completions, order preservation.
 * Interview favorite!
 */
export function promiseAll<T>(values: (T | Promise<T>)[]): Promise<T[]> {
  throw new Error("Not implemented");
}
