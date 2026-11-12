/**
 * 04 - Conditional types & `infer`                   Difficulty: Hard
 *
 * Replace each `any`. Do NOT use the built-ins ReturnType, Parameters,
 * Awaited, NonNullable, Exclude.
 *
 *   MyReturnType<() => string>                -> string
 *   MyParameters<(a: number, b: string) => void> -> [a: number, b: string]
 *   UnwrapPromise<Promise<Promise<number>>>   -> number   (recursive!)
 *   ElementType<string[]>                     -> string
 *   ElementType<number>                       -> never
 *   MyExclude<"a" | "b" | "c", "a">           -> "b" | "c"
 *   MyNonNullable<string | null | undefined>  -> string
 *
 * Syntax: `T extends SomeShape<infer U> ? U : Fallback`.
 * Remember: conditional types DISTRIBUTE over unions.
 */
export type MyReturnType<F> = any;

export type MyParameters<F> = any;

export type UnwrapPromise<T> = any;

export type ElementType<T> = any;

export type MyExclude<T, U> = any;

export type MyNonNullable<T> = any;
