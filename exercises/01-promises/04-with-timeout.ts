/**
 * 04 - withTimeout                                   Difficulty: Medium
 *
 * Return a Promise that behaves like `promise`, BUT if it does not settle
 * within `ms` milliseconds, reject with `new Error("Timeout")`.
 *
 * Bonus: clear the timer when the original promise settles first
 * (so you don't leave timers hanging).
 *
 * Example:
 *   await withTimeout(fetchData(), 1000); // data, or Error("Timeout")
 *
 * Concepts: racing promises (Promise.race or manual), clearTimeout.
 */
export function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((res, rej) => {
    const timer = setTimeout(() => { rej("Timeout") }, ms)
    promise.then(
      (value) => {
        clearTimeout(timer);
        res(value)
      }, (err) => {
        clearTimeout(timer),
          rej(err)
      }
    )
  });
}
