import { describe, it, expect, expectTypeOf } from "vitest";
import { getProperty, pick, mergeObjects } from "./02-generic-functions";

const user = { name: "Ada", age: 36, admin: true };

describe("02 - generic functions", () => {
  it("getProperty returns the value with the right type", () => {
    expect(getProperty(user, "age")).toBe(36);
    expect(getProperty(user, "name")).toBe("Ada");
    expectTypeOf(getProperty(user, "age")).toEqualTypeOf<number>();
    // @ts-expect-error - "foo" is not a key of user
    const invalid = () => getProperty(user, "foo");
    expectTypeOf(invalid).toBeFunction();
  });

  it("pick returns only the selected keys", () => {
    const result = pick(user, ["name", "admin"]);
    expect(result).toEqual({ name: "Ada", admin: true });
    expect(Object.keys(result)).toEqual(["name", "admin"]);
    expectTypeOf(result).toEqualTypeOf<{ name: string; admin: boolean }>();
  });

  it("pick does not mutate the input", () => {
    pick(user, ["name"]);
    expect(user).toEqual({ name: "Ada", age: 36, admin: true });
  });

  it("mergeObjects lets b override a", () => {
    const merged = mergeObjects({ a: 1, b: 2 }, { b: "two", c: true });
    expect(merged).toEqual({ a: 1, b: "two", c: true });
    expectTypeOf(merged.b).toEqualTypeOf<string>();
  });
});
