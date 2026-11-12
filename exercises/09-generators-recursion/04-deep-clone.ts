/**
 * 04 - deepClone (recursion)                         Difficulty: Medium
 *
 * Create a DEEP copy: changing the clone must never affect the original.
 * Do NOT use structuredClone or JSON.parse(JSON.stringify(...)).
 *
 * Must handle:
 *   - primitives (return as is), null
 *   - arrays and plain objects (recursively)
 *   - Date  -> new Date with the same time
 *   - Map   -> new Map with cloned keys and values
 *   - Set   -> new Set with cloned values
 *   - BONUS: circular references (obj.self = obj) — use a WeakMap
 *     of "already cloned" objects to avoid infinite recursion.
 *
 * Interview classic: "why doesn't JSON.parse(JSON.stringify(x)) work?"
 * (loses Dates, Maps, Sets, undefined, functions; crashes on cycles)
 */
export function deepClone<T>(value: T): T {
  throw new Error("Not implemented");
}
