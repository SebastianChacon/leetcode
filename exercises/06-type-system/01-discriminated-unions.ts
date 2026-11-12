/**
 * 01 - Discriminated unions & exhaustive checks      Difficulty: Easy
 *
 * `Shape` is a union. Each member has a `kind` field (the "discriminant").
 * Implement `area(shape)` using a `switch (shape.kind)`. Inside each case,
 * TypeScript NARROWS the type, so `shape.radius` is only allowed for circles.
 *
 * Also implement `assertNever(x: never)` and call it in the `default` case.
 * If someone adds a new shape later and forgets to handle it, TypeScript will
 * give a compile error. That's an "exhaustive check".
 *
 *   area({ kind: "circle", radius: 1 })               // Math.PI
 *   area({ kind: "square", size: 2 })                 // 4
 *   area({ kind: "rectangle", width: 2, height: 3 })  // 6
 *
 * assertNever should throw `new Error("Unexpected value: " + JSON.stringify(x))`.
 */
export type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

export function assertNever(x: never): never {
  throw new Error("Not implemented");
}

export function area(shape: Shape): number {
  throw new Error("Not implemented");
}
