/**
 * 02 - promisify                                     Difficulty: Medium
 *
 * Old Node.js APIs use "error-first callbacks": the LAST argument is a callback
 * called as `callback(error, result)`.
 *
 * Write `promisify(fn)` that returns a new function which takes the same
 * arguments (without the callback) and returns a Promise:
 *   - if the callback receives an error -> reject with that error
 *   - otherwise                        -> resolve with the result
 *
 * Example:
 *   function add(a: number, b: number, cb: Callback<number>) { cb(null, a + b); }
 *   const addAsync = promisify(add);
 *   await addAsync(2, 3); // 5
 *
 * Concepts: wrapping callback APIs, rest parameters, variadic tuple types.
 */
export type Callback<T> = (error: Error | null, result?: T) => void;

export function promisify<Args extends unknown[], T>(
  fn: (...args: [...Args, Callback<T>]) => void,
): (...args: Args) => Promise<T> {
  throw new Error("Not implemented");
}
