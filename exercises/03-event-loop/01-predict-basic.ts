/**
 * 01 - Predict the output: sync, microtask, macrotask     Difficulty: Easy
 *
 * In what order are the messages logged? Return them as an array.
 * Do NOT run the code — reason about it first, THEN check with the test.
 *
 *   console.log("1");
 *   setTimeout(() => console.log("2"), 0);
 *   Promise.resolve().then(() => console.log("3"));
 *   console.log("4");
 *
 * Rules to learn:
 *   1. All synchronous code runs first (the call stack).
 *   2. Then ALL microtasks (Promise.then, queueMicrotask, await continuations).
 *   3. Then ONE macrotask (setTimeout, setInterval, I/O), then microtasks again...
 */
export function predictOrder(): string[] {
  throw new Error("Not implemented");
}
