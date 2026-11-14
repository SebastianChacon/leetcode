/**
 * 01 - addTwoNumbers  (LeetCode #2)                  Difficulty: Medium
 *
 * You get two non-empty linked lists. Each one is a non-negative integer
 * with its digits stored in REVERSE order: the head holds the ones digit.
 * Each node holds one digit. Add the two numbers and return the sum as a
 * linked list in the same reversed format.
 *
 * Neither number has leading zeros, except the number 0 itself.
 *
 * Example:
 *   l1 = 2 -> 4 -> 3        (342)
 *   l2 = 5 -> 6 -> 4        (465)
 *   addTwoNumbers(l1, l2);  // 7 -> 0 -> 8   (807)
 *
 *   [0] + [0]                   // [0]
 *   [9,9,9,9,9,9,9] + [9,9,9,9] // [8,9,9,9,0,0,0,1]
 *
 * Constraints:
 *   - Each list has between 1 and 100 nodes.
 *   - 0 <= node.val <= 9
 *
 * Hints:
 *   - Walk both lists at the same time, like adding by hand in school.
 *     Keep a `carry` (0 or 1) from one digit to the next.
 *   - The lists can have different lengths. Treat a missing node as 0.
 *   - Don't forget a carry that is left over at the very end.
 *   - A "dummy" head node avoids a special case for the first node.
 *   - Don't turn the lists into numbers: 100 digits overflows `number`.
 *
 * Aim for O(max(m, n)) time.
 */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0
  while (l1 !== null || l2 !== null || carry !== 0) {
    const a = l1 !== null ? l1.val : 0;
    const b = l2 !== null ? l2.val : 0;

    const total = a + b + carry;
    carry = Math.floor(total / 10);
    curr.next = new ListNode(total % 10);
    curr = curr.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next
}
