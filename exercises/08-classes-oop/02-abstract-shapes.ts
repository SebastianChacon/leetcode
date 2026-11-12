/**
 * 02 - Abstract classes & inheritance                Difficulty: Easy
 *
 * `Shape` is ABSTRACT: you can't do `new Shape()`. Subclasses must implement
 * `area()` and `perimeter()`. `describe()` lives in the base class and works
 * for every subclass (that's polymorphism).
 *
 *   new Circle(1).describe();
 *   // "Circle: area=3.14, perimeter=6.28"   (2 decimals)
 *   new Rectangle(2, 3).describe();
 *   // "Rectangle: area=6.00, perimeter=10.00"
 *   new Square(2).describe();
 *   // "Square: area=4.00, perimeter=8.00"
 *
 * `Square` must EXTEND `Rectangle` (call `super(size, size)`).
 * `name` should come from each class (hint: an abstract property, or
 * `this.constructor.name`).
 *
 * Concepts: abstract, extends, super, method overriding, polymorphism.
 */
export abstract class Shape {
  abstract readonly name: string;
  abstract area(): number;
  abstract perimeter(): number;

  describe(): string {
    throw new Error("Not implemented");
  }
}

export class Circle extends Shape {
  readonly name: string = "Circle";

  constructor(public readonly radius: number) {
    super();
  }

  area(): number {
    throw new Error("Not implemented");
  }

  perimeter(): number {
    throw new Error("Not implemented");
  }
}

// TODO: implement Rectangle (width, height) and Square (size) — Square extends Rectangle.
export class Rectangle extends Shape {
  readonly name: string = "Rectangle";

  constructor(
    public readonly width: number,
    public readonly height: number,
  ) {
    super();
  }

  area(): number {
    throw new Error("Not implemented");
  }

  perimeter(): number {
    throw new Error("Not implemented");
  }
}

export class Square extends Rectangle {
  constructor(size: number) {
    super(size, size);
    throw new Error("Not implemented");
  }
}
