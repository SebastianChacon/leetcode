/**
 * 02 - Infinite generators & lazy helpers            Difficulty: Medium
 *
 *   fibonacci()          -> infinite generator: 0, 1, 1, 2, 3, 5, 8, ...
 *   take(iterable, n)    -> generator with the first n values
 *   mapIter(iterable, fn)    -> lazy map
 *   filterIter(iterable, fn) -> lazy filter
 *
 * Because everything is lazy, this works even though fibonacci never ends:
 *   [...take(filterIter(fibonacci(), (n) => n % 2 === 0), 5)];
 *   // [0, 2, 8, 34, 144]
 *
 * IMPORTANT: `take` must not pull more items than it needs from the source.
 *
 * Concepts: infinite sequences, Iterable<T>, composing generators.
 */
export function* fibonacci(): Generator<number> {
  throw new Error("Not implemented");
}

export function* take<T>(iterable: Iterable<T>, n: number): Generator<T> {
  throw new Error("Not implemented");
}

export function* mapIter<T, R>(iterable: Iterable<T>, fn: (item: T) => R): Generator<R> {
  throw new Error("Not implemented");
}

export function* filterIter<T>(iterable: Iterable<T>, fn: (item: T) => boolean): Generator<T> {
  throw new Error("Not implemented");
}
