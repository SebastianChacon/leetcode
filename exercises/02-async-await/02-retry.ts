/**
 * 02 - retry                                         Difficulty: Medium
 *
 * Call the async function `fn`. If it fails, try again, up to `attempts`
 * TOTAL calls. Resolve with the first successful result.
 * If every attempt fails, reject with the error from the LAST attempt.
 *
 * Optional `delayMs`: wait this long between attempts (default 0).
 *
 * Example:
 *   await retry(() => fetchFlakyApi(), 3); // tries at most 3 times
 *
 * Concepts: loops with await, error handling, real-world resilience.
 */
export async function retry<T>(
  fn: () => Promise<T>,
  attempts: number,
  delayMs = 0,
): Promise<T> {
  let lastError: unknown;

  for (let i = 0; i < attempts; i++){
    try {
      // console.log(fn())
      return await fn();
    } catch (err) {
      lastError = err;
      if (i !== attempts - 1 && delayMs > 0) {
        await new Promise((res) => setTimeout(res, delayMs));
      }
    }
  }
  throw lastError
}
