/**
 * 01 - sleep                                         Difficulty: Easy
 *
 * Create a function that returns a Promise which resolves after `ms` milliseconds.
 *
 * Example:
 *   await sleep(100); // continues ~100ms later
 *
 * Concepts: `new Promise((resolve, reject) => ...)`, setTimeout.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
