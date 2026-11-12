import { describe, it, expect } from "vitest";
import { Stack, Queue, isValidParentheses } from "./04-stack-queue";

describe("04 - Stack", () => {
  it("is LIFO", () => {
    const s = new Stack<number>();
    expect(s.isEmpty()).toBe(true);
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.size).toBe(3);
    expect(s.peek()).toBe(3);
    expect(s.pop()).toBe(3);
    expect(s.pop()).toBe(2);
    expect(s.toArray()).toEqual([1]);
    expect(s.pop()).toBe(1);
    expect(s.pop()).toBeUndefined();
    expect(s.isEmpty()).toBe(true);
  });

  it("toArray returns a copy", () => {
    const s = new Stack<string>();
    s.push("a");
    s.toArray().push("hack");
    expect(s.size).toBe(1);
  });
});

describe("04 - Queue", () => {
  it("is FIFO", () => {
    const q = new Queue<string>();
    q.enqueue("a");
    q.enqueue("b");
    q.enqueue("c");
    expect(q.size).toBe(3);
    expect(q.peek()).toBe("a");
    expect(q.dequeue()).toBe("a");
    expect(q.dequeue()).toBe("b");
    q.enqueue("d");
    expect(q.toArray()).toEqual(["c", "d"]);
    expect(q.dequeue()).toBe("c");
    expect(q.dequeue()).toBe("d");
    expect(q.dequeue()).toBeUndefined();
    expect(q.size).toBe(0);
    expect(q.isEmpty()).toBe(true);
  });
});

describe("04 - isValidParentheses (LeetCode #20)", () => {
  it("validates brackets", () => {
    expect(isValidParentheses("()")).toBe(true);
    expect(isValidParentheses("()[]{}")).toBe(true);
    expect(isValidParentheses("({[]})")).toBe(true);
    expect(isValidParentheses("")).toBe(true);
    expect(isValidParentheses("(]")).toBe(false);
    expect(isValidParentheses("([)]")).toBe(false);
    expect(isValidParentheses("((")).toBe(false);
    expect(isValidParentheses("]")).toBe(false);
  });
});
