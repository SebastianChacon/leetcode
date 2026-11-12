import { describe, it, expect } from "vitest";
import { Temperature } from "./05-temperature";

describe("05 - Temperature", () => {
  it("converts between units", () => {
    const t = new Temperature(25);
    expect(t.celsius).toBe(25);
    expect(t.fahrenheit).toBeCloseTo(77);
    expect(t.kelvin).toBeCloseTo(298.15);
  });

  it("setters update the stored value", () => {
    const t = new Temperature(0);
    t.fahrenheit = 212;
    expect(t.celsius).toBeCloseTo(100);
    t.celsius = -40;
    expect(t.fahrenheit).toBeCloseTo(-40);
  });

  it("rejects temperatures below absolute zero", () => {
    expect(() => new Temperature(-300)).toThrow(RangeError);
    const t = new Temperature(10);
    expect(() => {
      t.celsius = -273.16;
    }).toThrow(RangeError);
    expect(() => {
      t.fahrenheit = -500;
    }).toThrow(RangeError);
    expect(t.celsius).toBe(10);
    expect(new Temperature(Temperature.ABSOLUTE_ZERO).kelvin).toBeCloseTo(0);
  });

  it("kelvin is read-only", () => {
    const t = new Temperature(0);
    expect(() => {
      (t as unknown as { kelvin: number }).kelvin = 5;
    }).toThrow(TypeError);
  });

  it("static factory and compare", () => {
    expect(Temperature.fromFahrenheit(32).celsius).toBeCloseTo(0);
    const temps = [new Temperature(30), new Temperature(-5), new Temperature(12)];
    expect(temps.sort(Temperature.compare).map((t) => t.celsius)).toEqual([-5, 12, 30]);
  });
});
