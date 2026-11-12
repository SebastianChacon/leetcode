import { describe, it, expect } from "vitest";
import { curry } from "./04-curry";

const add3 = (a: number, b: number, c: number) => a + b + c;

describe("04 - curry", () => {
  it("supports one argument at a time", () => {
    expect(curry(add3)(1)(2)(3)).toBe(6);
  });

  it("supports grouped arguments", () => {
    const c = curry(add3);
    expect(c(1, 2)(3)).toBe(6);
    expect(c(1)(2, 3)).toBe(6);
    expect(c(1, 2, 3)).toBe(6);
  });

  it("partial applications are reusable (no shared state)", () => {
    const add1 = curry(add3)(1);
    expect(add1(2)(3)).toBe(6);
    expect(add1(10, 10)).toBe(21);
    expect(add1(0)(0)).toBe(1);
  });

  it("works with other arities", () => {
    const greet = curry((greeting: string, name: string) => `${greeting}, ${name}!`);
    expect(greet("Hello")("Ada")).toBe("Hello, Ada!");
    const one = curry((x: number) => x * 2);
    expect(one(21)).toBe(42);
  });
});
