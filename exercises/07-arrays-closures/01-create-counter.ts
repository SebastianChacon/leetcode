/**
 * 01 - createCounter (closures)                      Difficulty: Easy
 *
 * Return an object with methods that share a PRIVATE `count` variable
 * captured by a closure (it must not be reachable from outside).
 *
 *   const c = createCounter(5);
 *   c.increment(); // 6
 *   c.increment(); // 7
 *   c.decrement(); // 6
 *   c.reset();     // 5  (back to the initial value)
 *   c.value();     // 5
 *
 * Each counter is independent: two counters don't share state.
 *
 * Concepts: closures, lexical scope, data privacy without classes.
 */
export interface Counter {
  increment(): number;
  decrement(): number;
  reset(): number;
  value(): number;
}

export function createCounter(initial = 0): Counter {
  throw new Error("Not implemented");
}
