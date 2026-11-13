/**
 * 05 - promiseAllSettled (build your own)             Difficulty: Medium
 *
 * Implement `promiseAllSettled` WITHOUT using Promise.allSettled.
 * It NEVER rejects. It resolves with one result object per input, in order:
 *   { status: "fulfilled", value }   or   { status: "rejected", reason }
 *
 * Example:
 *   await promiseAllSettled([Promise.resolve(1), Promise.reject("x")]);
 *   // [{ status: "fulfilled", value: 1 }, { status: "rejected", reason: "x" }]
 *
 * Concepts: discriminated unions, never-failing aggregation.
 */
export type SettledResult<T> =
  | { status: "fulfilled"; value: T }
  | { status: "rejected"; reason: unknown };

export function promiseAllSettled<T>(promises: Promise<T>[]): Promise<SettledResult<T>[]> {
  return new Promise((res, rej) => {
    if(promises.length === 0) return res([])

    let count = 0;
    const results = new Array(promises.length)
    promises.forEach(async (promise, index) => {
      try {
        let result = await promise;
        results[index] = { status: "fulfilled", value: result }
      } catch (err) {
        results[index] = { status: "rejected", reason: err}
      }
      if(++count === promises.length) res(results)
    })
  })
}
