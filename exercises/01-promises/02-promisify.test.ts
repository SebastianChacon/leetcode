import { describe, it, expect } from "vitest";
import { promisify, type Callback } from "./02-promisify";

function add(a: number, b: number, cb: Callback<number>) {
  setTimeout(() => cb(null, a + b), 5);
}

function divide(a: number, b: number, cb: Callback<number>) {
  if (b === 0) return cb(new Error("Division by zero"));
  cb(null, a / b);
}

describe("02 - promisify", () => {
  it("returns a function that returns a Promise", () => {
    const addAsync = promisify(add);
    expect(typeof addAsync).toBe("function");
    expect(addAsync(1, 2)).toBeInstanceOf(Promise);
  });

  it("resolves with the callback result", async () => {
    const addAsync = promisify(add);
    await expect(addAsync(2, 3)).resolves.toBe(5);
  });

  it("rejects when the callback receives an error", async () => {
    const divideAsync = promisify(divide);
    await expect(divideAsync(1, 0)).rejects.toThrow("Division by zero");
    await expect(divideAsync(10, 2)).resolves.toBe(5);
  });
});
