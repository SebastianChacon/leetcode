import { describe, it, expect } from "vitest";
import { area, assertNever, type Shape } from "./01-discriminated-unions";

describe("01 - discriminated unions", () => {
  it("computes the area of each shape", () => {
    expect(area({ kind: "circle", radius: 1 })).toBeCloseTo(Math.PI);
    expect(area({ kind: "circle", radius: 2 })).toBeCloseTo(4 * Math.PI);
    expect(area({ kind: "square", size: 3 })).toBe(9);
    expect(area({ kind: "rectangle", width: 2, height: 5 })).toBe(10);
  });

  it("assertNever throws for unexpected values", () => {
    const bogus = { kind: "triangle" } as unknown as never;
    expect(() => assertNever(bogus)).toThrow('Unexpected value: {"kind":"triangle"}');
  });

  it("area throws for an unknown shape at runtime", () => {
    expect(() => area({ kind: "hexagon" } as unknown as Shape)).toThrow("Unexpected value");
  });
});
