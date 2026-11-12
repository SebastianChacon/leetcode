/**
 * 04 - curry                                         Difficulty: Hard
 *
 * Transform a function of N arguments so it can be called with its
 * arguments in any number of groups. When enough arguments are collected
 * (fn.length), call the original.
 *
 *   const add3 = (a: number, b: number, c: number) => a + b + c;
 *   const curried = curry(add3);
 *   curried(1)(2)(3);   // 6
 *   curried(1, 2)(3);   // 6
 *   curried(1)(2, 3);   // 6
 *   curried(1, 2, 3);   // 6
 *
 *   const add1 = curried(1); // reusable partial application
 *   add1(2)(3); // 6
 *   add1(10, 10); // 21
 *
 * Concepts: closures accumulating arguments, recursion, fn.length.
 * (Typing curry perfectly is very advanced; `any` is allowed here.)
 */
export function curry(fn: (...args: any[]) => any): any {
  throw new Error("Not implemented");
}
