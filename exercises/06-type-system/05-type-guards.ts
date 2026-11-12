/**
 * 05 - Narrowing `unknown` with type guards          Difficulty: Medium
 *
 * Data from APIs, JSON.parse, or user input is `unknown`. You must PROVE its
 * shape before using it. Write type guards (`x is Type`):
 *
 *   isUser(data)      -> true only if data is an object with:
 *                          id: number, name: string, email: string,
 *                          and optionally tags: string[]
 *   parseUsers(data)  -> if data is an array, return only the valid users;
 *                        otherwise return []
 *   parseJsonUser(s)  -> JSON.parse the string; return the User or null if the
 *                        JSON is invalid OR the shape is wrong (never throw)
 *
 * Concepts: `unknown` vs `any`, typeof, `in` operator, Array.isArray,
 * user-defined type guards, filter with a type guard.
 */
export interface User {
  id: number;
  name: string;
  email: string;
  tags?: string[];
}

export function isUser(data: unknown): data is User {
  throw new Error("Not implemented");
}

export function parseUsers(data: unknown): User[] {
  throw new Error("Not implemented");
}

export function parseJsonUser(json: string): User | null {
  throw new Error("Not implemented");
}
