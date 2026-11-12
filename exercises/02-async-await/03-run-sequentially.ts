/**
 * 03 - runSequentially                               Difficulty: Easy
 *
 * Run async tasks ONE AT A TIME (task 2 starts only after task 1 finishes).
 * Resolve with all results in order.
 *
 * Then think: what's the difference with `Promise.all(tasks.map(t => t()))`?
 * (Hint: total time. 3 tasks x 100ms = 300ms sequential vs ~100ms parallel.)
 *
 * Common interview trap: `tasks.forEach(async t => await t())` does NOT
 * run them in sequence. Use a `for...of` loop.
 *
 * Concepts: for...of + await, sequential vs parallel execution.
 */
export async function runSequentially<T>(tasks: (() => Promise<T>)[]): Promise<T[]> {
  throw new Error("Not implemented");
}
