import { describe, it, expectTypeOf } from "vitest";
import type { MyPartial, MyRequired, MyReadonly, MyPick, MyRecord, Mutable } from "./03-mapped-types";

interface Todo {
  title: string;
  done: boolean;
  tags?: string[];
}

describe("03 - mapped types", () => {
  it("MyPartial makes every property optional", () => {
    expectTypeOf<MyPartial<Todo>>().toEqualTypeOf<Partial<Todo>>();
  });

  it("MyRequired makes every property required", () => {
    expectTypeOf<MyRequired<Todo>>().toEqualTypeOf<{ title: string; done: boolean; tags: string[] }>();
  });

  it("MyReadonly makes every property readonly", () => {
    expectTypeOf<MyReadonly<Todo>>().toEqualTypeOf<Readonly<Todo>>();
  });

  it("MyPick keeps only the given keys", () => {
    expectTypeOf<MyPick<Todo, "title" | "done">>().toEqualTypeOf<{ title: string; done: boolean }>();
  });

  it("MyRecord builds an object type from keys", () => {
    expectTypeOf<MyRecord<"x" | "y", number>>().toEqualTypeOf<{ x: number; y: number }>();
  });

  it("Mutable removes readonly", () => {
    expectTypeOf<Mutable<Readonly<Todo>>>().toEqualTypeOf<Todo>();
  });
});
