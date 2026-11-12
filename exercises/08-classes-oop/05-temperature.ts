/**
 * 05 - Getters, setters & static members             Difficulty: Easy
 *
 * Store the temperature ONCE (in Celsius) and expose computed views:
 *
 *   const t = new Temperature(25);
 *   t.celsius;          // 25
 *   t.fahrenheit;       // 77
 *   t.kelvin;           // 298.15
 *   t.fahrenheit = 212; // setter -> t.celsius becomes 100
 *   t.celsius = -300;   // throws RangeError (below absolute zero -273.15)
 *
 *   Temperature.fromFahrenheit(32).celsius; // 0   (static factory)
 *   Temperature.ABSOLUTE_ZERO;              // -273.15 (static readonly)
 *   Temperature.compare(a, b);              // negative / 0 / positive (for sort)
 *
 * The constructor must also validate. `kelvin` is read-only (getter only).
 *
 * Formulas: F = C * 9/5 + 32,  C = (F - 32) * 5/9,  K = C + 273.15
 *
 * Concepts: get/set accessors, static methods & properties, validation.
 */
export class Temperature {
  static readonly ABSOLUTE_ZERO = -273.15;

  constructor(celsius: number) {
    throw new Error("Not implemented");
  }

  static fromFahrenheit(f: number): Temperature {
    throw new Error("Not implemented");
  }

  static compare(a: Temperature, b: Temperature): number {
    throw new Error("Not implemented");
  }

  get celsius(): number {
    throw new Error("Not implemented");
  }

  set celsius(value: number) {
    throw new Error("Not implemented");
  }

  get fahrenheit(): number {
    throw new Error("Not implemented");
  }

  set fahrenheit(value: number) {
    throw new Error("Not implemented");
  }

  get kelvin(): number {
    throw new Error("Not implemented");
  }
}
