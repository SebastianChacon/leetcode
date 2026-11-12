import { describe, it, expect, vi } from "vitest";
import { groupBy } from "./04-group-by";

describe("04 - groupBy", () => {
  it("groups by boolean keys", () => {
    const result = groupBy([1, 2, 3, 4, 5], (n) => n % 2 === 0);
    expect([...result]).toEqual([
      [false, [1, 3, 5]],
      [true, [2, 4]],
    ]);
  });

  it("groups objects by a string property", () => {
    const users = [
      { name: "Ana", role: "admin" },
      { name: "Bo", role: "user" },
      { name: "Cy", role: "admin" },
    ];
    const result = groupBy(users, (u) => u.role);
    expect(result.get("admin")?.map((u) => u.name)).toEqual(["Ana", "Cy"]);
    expect(result.get("user")?.map((u) => u.name)).toEqual(["Bo"]);
  });

  it("supports object keys (by reference)", () => {
    const teamA = { name: "A" };
    const teamB = { name: "B" };
    const players = [
      { p: 1, team: teamA },
      { p: 2, team: teamB },
      { p: 3, team: teamA },
    ];
    const result = groupBy(players, (x) => x.team);
    expect(result.get(teamA)?.map((x) => x.p)).toEqual([1, 3]);
    expect(result.size).toBe(2);
  });

  it("does not use Map.groupBy", () => {
    const M = Map as unknown as { groupBy?: unknown };
    if (typeof M.groupBy !== "function") return;
    const spy = vi.spyOn(Map as unknown as { groupBy: () => unknown }, "groupBy");
    groupBy([1, 2], (n) => n);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});
