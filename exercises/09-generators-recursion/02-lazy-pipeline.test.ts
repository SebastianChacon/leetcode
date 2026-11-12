import { describe, it, expect } from "vitest";
import { fibonacci, take, mapIter, filterIter } from "./02-lazy-pipeline";

describe("02 - lazy pipeline", () => {
  it("fibonacci + take", () => {
    expect([...take(fibonacci(), 10)]).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect([...take(fibonacci(), 0)]).toEqual([]);
  });

  it("take works on any iterable", () => {
    expect([...take([1, 2, 3], 5)]).toEqual([1, 2, 3]);
    expect([...take("hello", 2)]).toEqual(["h", "e"]);
  });

  it("composes lazily over an infinite sequence", () => {
    const evens = filterIter(fibonacci(), (n) => n % 2 === 0);
    expect([...take(evens, 5)]).toEqual([0, 2, 8, 34, 144]);
    expect([...take(mapIter(fibonacci(), (n) => n * 10), 4)]).toEqual([0, 10, 10, 20]);
  });

  it("take does not pull extra items", () => {
    let pulled = 0;
    function* counter() {
      while (true) {
        pulled++;
        yield pulled;
      }
    }
    expect([...take(counter(), 3)]).toEqual([1, 2, 3]);
    expect(pulled).toBe(3);
  });
});
