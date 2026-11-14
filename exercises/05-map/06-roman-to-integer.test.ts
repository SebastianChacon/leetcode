import { describe, it, expect } from "vitest";
import { romanToInt } from "./06-roman-to-integer";

describe("06 - romanToInt", () => {
  it("solves the LeetCode examples", () => {
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("LVIII")).toBe(58);
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  it("converts every single symbol", () => {
    expect(romanToInt("I")).toBe(1);
    expect(romanToInt("V")).toBe(5);
    expect(romanToInt("X")).toBe(10);
    expect(romanToInt("L")).toBe(50);
    expect(romanToInt("C")).toBe(100);
    expect(romanToInt("D")).toBe(500);
    expect(romanToInt("M")).toBe(1000);
  });

  it("handles all six subtraction pairs", () => {
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("XL")).toBe(40);
    expect(romanToInt("XC")).toBe(90);
    expect(romanToInt("CD")).toBe(400);
    expect(romanToInt("CM")).toBe(900);
  });

  it("handles a subtraction pair at the end of the string", () => {
    expect(romanToInt("XIV")).toBe(14);
    expect(romanToInt("MMXXIV")).toBe(2024);
  });

  it("handles the edges of the range", () => {
    expect(romanToInt("MMMCMXCIX")).toBe(3999);
    expect(romanToInt("CDXLIV")).toBe(444);
  });
});
