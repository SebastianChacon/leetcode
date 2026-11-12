import { describe, it, expect } from "vitest";
import { getUserDisplayName, type UserApi } from "./01-safe-fetch-user";

const api: UserApi = {
  async getUser(id) {
    await new Promise((r) => setTimeout(r, 5));
    if (id === 1) return { id, name: "Ada" };
    if (id === 2) return { id, name: "linus" };
    throw new Error("User not found");
  },
};

describe("01 - getUserDisplayName", () => {
  it("returns the uppercase name", async () => {
    await expect(getUserDisplayName(api, 1)).resolves.toBe("ADA");
    await expect(getUserDisplayName(api, 2)).resolves.toBe("LINUS");
  });

  it("returns UNKNOWN when the api fails", async () => {
    await expect(getUserDisplayName(api, 999)).resolves.toBe("UNKNOWN");
  });
});
