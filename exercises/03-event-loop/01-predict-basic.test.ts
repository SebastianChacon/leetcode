import { describe, it, expect } from "vitest";
import { predictOrder } from "./01-predict-basic";
import { runSnippet } from "./_run-snippet";

describe("01 - predict basic order", () => {
  it("matches the real execution order", async () => {
    const actual = await runSnippet((log) => {
      log("1");
      setTimeout(() => log("2"), 0);
      Promise.resolve().then(() => log("3"));
      log("4");
    });
    expect(predictOrder()).toEqual(actual);
  });
});
