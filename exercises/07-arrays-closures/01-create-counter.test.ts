import { describe, it, expect } from "vitest";
import { createCounter } from "./01-create-counter";

describe("01 - createCounter", () => {
  it("increments, decrements and resets", () => {
    const c = createCounter(5);
    expect(c.increment()).toBe(6);
    expect(c.increment()).toBe(7);
    expect(c.decrement()).toBe(6);
    expect(c.reset()).toBe(5);
    expect(c.value()).toBe(5);
  });

  it("defaults to 0", () => {
    expect(createCounter().value()).toBe(0);
  });

  it("counters are independent", () => {
    const a = createCounter();
    const b = createCounter();
    a.increment();
    a.increment();
    expect(a.value()).toBe(2);
    expect(b.value()).toBe(0);
  });

  it("keeps count private", () => {
    const c = createCounter(1);
    expect(Object.keys(c).sort()).toEqual(["decrement", "increment", "reset", "value"]);
  });
});
