import { describe, it, expectTypeOf } from "vitest";
import type {
  MyReturnType,
  MyParameters,
  UnwrapPromise,
  ElementType,
  MyExclude,
  MyNonNullable,
} from "./04-conditional-types";

describe("04 - conditional types", () => {
  it("MyReturnType", () => {
    expectTypeOf<MyReturnType<() => string>>().toEqualTypeOf<string>();
    expectTypeOf<MyReturnType<(x: number) => Promise<boolean>>>().toEqualTypeOf<Promise<boolean>>();
  });

  it("MyParameters", () => {
    expectTypeOf<MyParameters<(a: number, b: string) => void>>().toEqualTypeOf<[a: number, b: string]>();
    expectTypeOf<MyParameters<() => void>>().toEqualTypeOf<[]>();
  });

  it("UnwrapPromise (recursive)", () => {
    expectTypeOf<UnwrapPromise<Promise<number>>>().toEqualTypeOf<number>();
    expectTypeOf<UnwrapPromise<Promise<Promise<string>>>>().toEqualTypeOf<string>();
    expectTypeOf<UnwrapPromise<boolean>>().toEqualTypeOf<boolean>();
  });

  it("ElementType", () => {
    expectTypeOf<ElementType<string[]>>().toEqualTypeOf<string>();
    expectTypeOf<ElementType<(number | boolean)[]>>().toEqualTypeOf<number | boolean>();
    expectTypeOf<ElementType<number>>().toEqualTypeOf<never>();
  });

  it("MyExclude", () => {
    expectTypeOf<MyExclude<"a" | "b" | "c", "a">>().toEqualTypeOf<"b" | "c">();
    expectTypeOf<MyExclude<string | number, string>>().toEqualTypeOf<number>();
  });

  it("MyNonNullable", () => {
    expectTypeOf<MyNonNullable<string | null | undefined>>().toEqualTypeOf<string>();
  });
});
