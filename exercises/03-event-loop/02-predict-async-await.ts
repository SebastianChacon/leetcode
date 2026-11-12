/**
 * 02 - Predict the output: async/await                Difficulty: Medium
 *
 * In what order are the messages logged?
 *
 *   async function a() {
 *     console.log("a1");
 *     await b();
 *     console.log("a2");
 *   }
 *   async function b() {
 *     console.log("b");
 *   }
 *
 *   console.log("start");
 *   a();
 *   console.log("end");
 *
 * Key insight: an async function runs SYNCHRONOUSLY until its first `await`.
 * Everything after the `await` is scheduled as a microtask.
 */
export function predictOrder(): string[] {
  throw new Error("Not implemented");
}
