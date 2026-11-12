/**
 * 05 - LRUCache  (LeetCode #146)                     Difficulty: Medium
 *
 * A Least-Recently-Used cache with a fixed `capacity`:
 *   - get(key): return the value (or undefined). Marks the key as recently used.
 *   - put(key, value): insert/update. Marks the key as recently used.
 *     If size exceeds capacity, evict the LEAST recently used key.
 *   - size: current number of entries.
 *
 * Both get and put must be O(1).
 *
 * Trick: a JS Map remembers insertion order. To "touch" a key, delete it and
 * set it again (moves it to the end). The oldest key is
 * `map.keys().next().value`.
 *
 * Asked at Google, Meta, Amazon... very often.
 */
export class LRUCache<K, V> {
  constructor(capacity: number) {
    throw new Error("Not implemented");
  }

  get(key: K): V | undefined {
    throw new Error("Not implemented");
  }

  put(key: K, value: V): void {
    throw new Error("Not implemented");
  }

  get size(): number {
    throw new Error("Not implemented");
  }
}
