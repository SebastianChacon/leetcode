export function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;

  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char in pairs) {
      // closing bracket → must match the most recent opener
      if (stack.pop() !== pairs[char]) return false;
    } else {
      // opening bracket → save it
      stack.push(char);
    }
  }

  return stack.length === 0;
}
