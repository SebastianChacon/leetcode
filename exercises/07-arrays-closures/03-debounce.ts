/**
 * 03 - debounce                                      Difficulty: Medium
 *
 * Return a function that delays calling `fn` until `ms` milliseconds have
 * passed WITHOUT any new call. Every new call restarts the timer.
 * `fn` is called with the arguments of the LAST call.
 *
 * Also add a `.cancel()` method that cancels a pending call.
 *
 *   const search = debounce((q: string) => fetchResults(q), 300);
 *   search("h"); search("he"); search("hel");
 *   // ...300ms of silence... -> fetchResults("hel") called ONCE
 *
 * Used for: search inputs, window resize, autosave. Classic frontend interview.
 *
 * Concepts: closures holding a timer id, clearTimeout, attaching props to functions.
 */
export type Debounced<Args extends unknown[]> = ((...args: Args) => void) & { cancel(): void };

export function debounce<Args extends unknown[]>(fn: (...args: Args) => void, ms: number): Debounced<Args> {
  throw new Error("Not implemented");
}
