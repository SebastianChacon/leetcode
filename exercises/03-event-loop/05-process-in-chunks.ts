/**
 * 05 - processInChunks (don't block the event loop)  Difficulty: Medium
 *
 * Processing a huge array synchronously freezes the app (no clicks, no
 * timers, no requests are handled until it finishes).
 *
 * Process `items` with the SYNC function `fn`, `chunkSize` items at a time.
 * Between chunks, yield to the event loop with `setTimeout(..., 0)` so other
 * tasks can run. Resolve with all results in order.
 *
 *   - The first chunk should be processed right away (synchronously).
 *
 * Example:
 *   await processInChunks(bigList, 1000, transform);
 *
 * Concepts: blocking vs non-blocking, macrotasks, cooperative scheduling.
 */
export function processInChunks<T, R>(items: T[], chunkSize: number, fn: (item: T) => R): Promise<R[]> {
  throw new Error("Not implemented");
}
