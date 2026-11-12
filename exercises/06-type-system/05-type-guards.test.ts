import { describe, it, expect, expectTypeOf } from "vitest";
import { isUser, parseUsers, parseJsonUser, type User } from "./05-type-guards";

const valid = { id: 1, name: "Ada", email: "ada@example.com" };

describe("05 - type guards", () => {
  it("isUser accepts valid users", () => {
    expect(isUser(valid)).toBe(true);
    expect(isUser({ ...valid, tags: ["a", "b"] })).toBe(true);
  });

  it("isUser rejects invalid values", () => {
    expect(isUser(null)).toBe(false);
    expect(isUser(undefined)).toBe(false);
    expect(isUser("Ada")).toBe(false);
    expect(isUser([])).toBe(false);
    expect(isUser({ ...valid, id: "1" })).toBe(false);
    expect(isUser({ id: 1, name: "Ada" })).toBe(false);
    expect(isUser({ ...valid, tags: "a" })).toBe(false);
    expect(isUser({ ...valid, tags: [1, 2] })).toBe(false);
  });

  it("isUser narrows the type", () => {
    const data: unknown = valid;
    if (isUser(data)) {
      expectTypeOf(data).toEqualTypeOf<User>();
    }
  });

  it("parseUsers keeps only valid users", () => {
    const input = [valid, { id: 2 }, null, { id: 3, name: "Bo", email: "bo@x.com" }];
    expect(parseUsers(input).map((u) => u.id)).toEqual([1, 3]);
    expect(parseUsers("not an array")).toEqual([]);
    expect(parseUsers({ users: [valid] })).toEqual([]);
  });

  it("parseJsonUser never throws", () => {
    expect(parseJsonUser(JSON.stringify(valid))).toEqual(valid);
    expect(parseJsonUser("{ broken json")).toBeNull();
    expect(parseJsonUser('{"id":1}')).toBeNull();
    expect(parseJsonUser("null")).toBeNull();
  });
});
