/**
 * 02 - Generic functions with constraints            Difficulty: Medium
 *
 * Implement these with full type safety (no `any`!):
 *
 * getProperty(obj, key)
 *   getProperty({ name: "Ada", age: 36 }, "age")  // 36, typed as number
 *   getProperty({ name: "Ada" }, "foo")           // ❌ compile error
 *
 * pick(obj, keys)
 *   pick({ a: 1, b: "x", c: true }, ["a", "c"])  // { a: 1, c: true }
 *
 * mergeObjects(a, b) — b's properties override a's
 *   mergeObjects({ a: 1, b: 2 }, { b: "two" })    // { a: 1, b: "two" }
 *
 * Concepts: `K extends keyof T`, indexed access `T[K]`, `Pick<T, K>`,
 * `Omit`, intersection types.
 */
export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  throw new Error("Not implemented");
}

export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  throw new Error("Not implemented");
}

export function mergeObjects<A extends object, B extends object>(a: A, b: B): Omit<A, keyof B> & B {
  throw new Error("Not implemented");
}
