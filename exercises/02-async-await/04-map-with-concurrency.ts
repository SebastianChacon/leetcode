/**
 * 04 - mapWithConcurrency                            Difficulty: Hard
 *
 * Like `Promise.all(items.map(fn))`, but at most `limit` calls of `fn`
 * may be running at the same time. As soon as one finishes, start the next.
 *
 *   - Results must be in the SAME ORDER as `items`.
 *   - If any call rejects, the returned promise rejects.
 *
 * Example:
 *   // download 100 files but only 5 at a time
 *   await mapWithConcurrency(urls, 5, download);
 *
 * Concepts: worker pool pattern, shared index, Promise.all of workers.
 * Asked a LOT in senior/frontend interviews.
 */
export async function mapWithConcurrency<T, R>(
  items: T[],
  limit: number,
  fn: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  throw new Error("Not implemented");
}
