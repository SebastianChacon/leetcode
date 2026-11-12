/**
 * 02 - memoize                                       Difficulty: Medium
 *
 * Return a version of `fn` that caches results. If called again with the
 * SAME arguments, return the cached result without calling `fn` again.
 *
 * Arguments are primitives (numbers/strings/booleans). Use a key such as
 * JSON.stringify(args). Different argument lists must not collide:
 * memoized(1, 23) and memoized(12, 3) are different calls.
 *
 *   const slowSquare = (n: number) => { ...heavy work...; return n * n; };
 *   const fastSquare = memoize(slowSquare);
 *   fastSquare(4); // computes -> 16
 *   fastSquare(4); // cached   -> 16
 *
 * Concepts: closures holding a cache (Map), higher-order functions, generics
 * that preserve the function signature.
 */
export function memoize<Args extends (string | number | boolean)[], R>(
  fn: (...args: Args) => R,
): (...args: Args) => R {
  throw new Error("Not implemented");
}
