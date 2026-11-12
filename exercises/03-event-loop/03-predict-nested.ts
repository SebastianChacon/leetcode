/**
 * 03 - Predict the output: nested tasks               Difficulty: Hard
 *
 * In what order are the messages logged? (Node.js)
 *
 *   setTimeout(() => console.log("timeout1"), 0);
 *   setTimeout(() => {
 *     console.log("timeout2");
 *     Promise.resolve().then(() => console.log("micro-in-timeout"));
 *   }, 0);
 *   Promise.resolve().then(() => {
 *     console.log("micro1");
 *     setTimeout(() => console.log("timeout-from-micro"), 0);
 *   });
 *   queueMicrotask(() => console.log("micro2"));
 *   console.log("sync");
 *
 * Hint: after EACH macrotask (each setTimeout callback), the microtask queue
 * is fully drained before the next macrotask runs.
 */
export function predictOrder(): string[] {
  throw new Error("Not implemented");
}
