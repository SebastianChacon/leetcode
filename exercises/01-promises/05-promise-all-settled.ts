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
  throw new Error("Not implemented");
}
