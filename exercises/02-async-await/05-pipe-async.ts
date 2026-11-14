/**
 * 05 - pipeAsync                                     Difficulty: Medium
 *
 * Compose functions left-to-right. Each function receives the result of the
 * previous one. Functions may be sync OR async (return a Promise).
 * The composed function always returns a Promise.
 *
 * Example:
 *   const process = pipeAsync(
 *     (x: number) => x + 1,
 *     async (x: number) => x * 2,
 *     (x: number) => `result: ${x}`,
 *   );
 *   await process(3); // "result: 8"
 *
 * Concepts: reduce over promises, awaiting values that may not be promises.
 */
export type AnyFn = (input: any) => unknown;

export function pipeAsync(...fns: AnyFn[]): (input: unknown) => Promise<unknown> {
  return async (input) => {

    let value = input
    for (const fn of fns) {
      value = await fn(value)
      console.log(value)

    }
    return value
  }

}
