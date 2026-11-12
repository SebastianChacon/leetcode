/**
 * 03 - Typed EventEmitter                            Difficulty: Medium
 *
 * A generic event emitter where event names AND listener arguments are
 * type-checked.
 *
 *   type Events = { login: [user: string]; logout: []; error: [code: number, msg: string] };
 *   const em = new EventEmitter<Events>();
 *
 *   const unsubscribe = em.on("login", (user) => console.log(user)); // user: string
 *   em.emit("login", "ada");      // ✅
 *   em.emit("login", 42);         // ❌ compile error
 *   unsubscribe();                // removes that listener
 *
 *   em.once("logout", () => ...); // runs only the first time
 *   em.off("login", listener);    // remove a specific listener
 *   em.emit(...)                  // returns true if there were listeners
 *   em.listenerCount("login")     // number
 *
 * Listeners run in the order they were added.
 *
 * Concepts: generics constrained to records, keyof, mapped types,
 * Map<key, Set<listener>>, returning closures.
 */
export type EventMap = Record<string, unknown[]>;
export type Listener<Args extends unknown[]> = (...args: Args) => void;

export class EventEmitter<Events extends EventMap> {
  on<E extends keyof Events>(event: E, listener: Listener<Events[E]>): () => void {
    throw new Error("Not implemented");
  }

  once<E extends keyof Events>(event: E, listener: Listener<Events[E]>): () => void {
    throw new Error("Not implemented");
  }

  off<E extends keyof Events>(event: E, listener: Listener<Events[E]>): void {
    throw new Error("Not implemented");
  }

  emit<E extends keyof Events>(event: E, ...args: Events[E]): boolean {
    throw new Error("Not implemented");
  }

  listenerCount<E extends keyof Events>(event: E): number {
    throw new Error("Not implemented");
  }
}
