import { describe, it, expect } from "vitest";
import { Shape, Circle, Rectangle, Square } from "./02-abstract-shapes";

describe("02 - abstract shapes", () => {
  it("computes area and perimeter", () => {
    expect(new Circle(1).area()).toBeCloseTo(Math.PI);
    expect(new Circle(1).perimeter()).toBeCloseTo(2 * Math.PI);
    expect(new Rectangle(2, 3).area()).toBe(6);
    expect(new Rectangle(2, 3).perimeter()).toBe(10);
    expect(new Square(2).area()).toBe(4);
  });

  it("describe() works polymorphically", () => {
    const shapes: Shape[] = [new Circle(1), new Rectangle(2, 3), new Square(2)];
    expect(shapes.map((s) => s.describe())).toEqual([
      "Circle: area=3.14, perimeter=6.28",
      "Rectangle: area=6.00, perimeter=10.00",
      "Square: area=4.00, perimeter=8.00",
    ]);
  });

  it("Square is a Rectangle is a Shape", () => {
    const sq = new Square(3);
    expect(sq).toBeInstanceOf(Square);
    expect(sq).toBeInstanceOf(Rectangle);
    expect(sq).toBeInstanceOf(Shape);
    expect(sq.width).toBe(3);
    expect(sq.height).toBe(3);
  });
});
