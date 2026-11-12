// Helper used by the tests: runs a snippet and records what it logs (in order).
export async function runSnippet(snippet: (log: (msg: string) => void) => void): Promise<string[]> {
  const logs: string[] = [];
  snippet((msg) => logs.push(msg));
  await new Promise((r) => setTimeout(r, 30)); // let all timers & microtasks finish
  return logs;
}
