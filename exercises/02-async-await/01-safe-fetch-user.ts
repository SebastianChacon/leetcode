/**
 * 01 - getUserDisplayName                            Difficulty: Easy
 *
 * Using async/await and try/catch:
 *   - await `api.getUser(id)`
 *   - return the user's name in UPPERCASE
 *   - if `getUser` throws/rejects, return "UNKNOWN" instead of crashing
 *
 * Example:
 *   await getUserDisplayName(api, 1); // "ADA"
 *   await getUserDisplayName(api, 999); // "UNKNOWN" (api rejected)
 *
 * Concepts: async functions, await, try/catch with rejected promises.
 */
export interface User {
  id: number;
  name: string;
}

export interface UserApi {
  getUser(id: number): Promise<User>;
}

export async function getUserDisplayName(
  api: UserApi,
  id: number,
): Promise<string> {
  try {
    const result = await api.getUser(id);
    return result.name.toUpperCase();
  } catch (err) {
    return "UNKNOWN";
  }
}
