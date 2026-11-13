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
  // console.log(values)
  return new Promise((res, rej) => {
    let count = 0;
    const results: Array<T> = new Array < T > (values.length);
    if(values.length === 0) return res([])
    values.forEach( async (value, i) => {
      try {
        results[i] = await value;
        if (++count === values.length) res(results);
      } catch (err) {
        rej(err)
      }
    })
  });
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

await promiseAll([Promise.resolve(1), 2, sleep(10).then(() => 3)]); // [1, 2, 3]
