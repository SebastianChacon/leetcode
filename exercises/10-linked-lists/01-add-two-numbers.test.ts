import { describe, it, expect } from "vitest";
import { ListNode, addTwoNumbers } from "./01-add-two-numbers";

function fromArray(values: number[]): ListNode | null {
  const dummy = new ListNode();
  let tail = dummy;
  for (const v of values) {
    tail.next = new ListNode(v);
    tail = tail.next;
  }
  return dummy.next;
}

function toArray(head: ListNode | null): number[] {
  const out: number[] = [];
  for (let node = head; node; node = node.next) out.push(node.val);
  return out;
}

const add = (a: number[], b: number[]) =>
  toArray(addTwoNumbers(fromArray(a), fromArray(b)));

describe("01 - addTwoNumbers", () => {
  it("solves the LeetCode examples", () => {
    expect(add([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
    expect(add([0], [0])).toEqual([0]);
    expect(add([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([
      8, 9, 9, 9, 0, 0, 0, 1,
    ]);
  });

  it("handles lists of different lengths", () => {
    expect(add([1], [9, 9, 9])).toEqual([0, 0, 0, 1]);
    expect(add([5, 6, 7], [3])).toEqual([8, 6, 7]);
  });

  it("adds a new node for a leftover carry", () => {
    expect(add([5], [5])).toEqual([0, 1]);
  });

  it("returns a list made of ListNode instances", () => {
    const result = addTwoNumbers(fromArray([1]), fromArray([2]));
    expect(result).toBeInstanceOf(ListNode);
  });

  it("works with 100-digit numbers (no number conversion)", () => {
    const a = [1, ...Array(99).fill(0)]; // the number 1, padded to 100 digits
    const b = Array(100).fill(9); // 10^100 - 1
    // a + b = 10^100  →  100 zeros, then a 1
    expect(add(a, b)).toEqual([...Array(100).fill(0), 1]);
  });
});
