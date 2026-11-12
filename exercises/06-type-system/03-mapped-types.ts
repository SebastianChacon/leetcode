/**
 * 03 - Mapped types (rebuild the built-in utilities)  Difficulty: Medium
 *
 * Replace each `any` with your own implementation. Do NOT use the
 * built-in Partial, Required, Readonly, Pick, Record.
 *
 *   MyPartial<{ a: number }>            -> { a?: number }
 *   MyRequired<{ a?: number }>          -> { a: number }
 *   MyReadonly<{ a: number }>           -> { readonly a: number }
 *   MyPick<{ a: 1; b: 2 }, "a">         -> { a: 1 }
 *   MyRecord<"x" | "y", boolean>        -> { x: boolean; y: boolean }
 *   Mutable<{ readonly a: number }>     -> { a: number }
 *
 * Syntax: `{ [K in keyof T]: T[K] }`, modifiers `?`, `-?`, `readonly`, `-readonly`.
 *
 * These are checked by the TypeScript compiler: run `npm test` and look at
 * "Type Errors" in the output.
 */
export type MyPartial<T> = any;

export type MyRequired<T> = any;

export type MyReadonly<T> = any;

export type MyPick<T, K extends keyof T> = any;

export type MyRecord<K extends PropertyKey, V> = any;

export type Mutable<T> = any;
