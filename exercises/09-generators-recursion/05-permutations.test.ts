import { describe, it, expect } from "vitest";
import { permutations, subsets } from "./05-permutations";

// Sort results so the order you generate them in doesn't matter.
const normalize = (lists: number[][], sortInner = false) =>
  lists.map((l) => (sortInner ? [...l].sort((a, b) => a - b) : l)).map((l) => l.join(",")).sort();

describe("05 - permutations", () => {
  it("generates all orderings", () => {
    const result = permutations([1, 2, 3]);
    expect(result).toHaveLength(6);
    expect(normalize(result)).toEqual(
      normalize([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ]),
    );
  });

  it("handles small inputs", () => {
    expect(permutations([1])).toEqual([[1]]);
    expect(normalize(permutations([0, 1]))).toEqual(["0,1", "1,0"]);
    expect(permutations([1, 2, 3, 4, 5])).toHaveLength(120);
  });
});

describe("05 - subsets", () => {
  it("generates the power set", () => {
    const result = subsets([1, 2, 3]);
    expect(result).toHaveLength(8);
    expect(normalize(result, true)).toEqual(
      normalize([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]], true),
    );
  });

  it("handles small inputs", () => {
    expect(normalize(subsets([0]), true)).toEqual(normalize([[], [0]]));
    expect(subsets([1, 2, 3, 4, 5])).toHaveLength(32);
  });
});
