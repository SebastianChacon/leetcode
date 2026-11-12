/**
 * 04 - Generic Stack & Queue with an interface       Difficulty: Easy
 *
 * Both classes implement the `Collection<T>` interface.
 *
 * Stack (LIFO - last in, first out):
 *   push(x), pop() -> T | undefined, peek() -> T | undefined (top, no removal)
 *
 * Queue (FIFO - first in, first out):
 *   enqueue(x), dequeue() -> T | undefined, peek() -> T | undefined (front)
 *
 * Both: size (getter), isEmpty(), toArray() (copy, Stack: bottom->top, Queue: front->back)
 *
 * Bonus: make Queue.dequeue O(1) without Array.shift (which is O(n)).
 * Hint: keep a `head` index, or use an object/Map with head/tail counters.
 *
 * Then use your Stack to solve: isValidParentheses("({[]})") // true  (LeetCode #20)
 *
 * Concepts: interfaces, `implements`, generic classes, encapsulation.
 */
export interface Collection<T> {
  readonly size: number;
  isEmpty(): boolean;
  peek(): T | undefined;
  toArray(): T[];
}

export class Stack<T> implements Collection<T> {
  push(item: T): void {
    throw new Error("Not implemented");
  }
  pop(): T | undefined {
    throw new Error("Not implemented");
  }
  peek(): T | undefined {
    throw new Error("Not implemented");
  }
  get size(): number {
    throw new Error("Not implemented");
  }
  isEmpty(): boolean {
    throw new Error("Not implemented");
  }
  toArray(): T[] {
    throw new Error("Not implemented");
  }
}

export class Queue<T> implements Collection<T> {
  enqueue(item: T): void {
    throw new Error("Not implemented");
  }
  dequeue(): T | undefined {
    throw new Error("Not implemented");
  }
  peek(): T | undefined {
    throw new Error("Not implemented");
  }
  get size(): number {
    throw new Error("Not implemented");
  }
  isEmpty(): boolean {
    throw new Error("Not implemented");
  }
  toArray(): T[] {
    throw new Error("Not implemented");
  }
}

export function isValidParentheses(s: string): boolean {
  throw new Error("Not implemented");
}
