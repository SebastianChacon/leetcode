import { describe, it, expect } from "vitest";
import { predictOrder } from "./03-predict-nested";
import { runSnippet } from "./_run-snippet";

describe("03 - predict nested order", () => {
  it("matches the real execution order", async () => {
    const actual = await runSnippet((log) => {
      setTimeout(() => log("timeout1"), 0);
      setTimeout(() => {
        log("timeout2");
        Promise.resolve().then(() => log("micro-in-timeout"));
      }, 0);
      Promise.resolve().then(() => {
        log("micro1");
        setTimeout(() => log("timeout-from-micro"), 0);
      });
      queueMicrotask(() => log("micro2"));
      log("sync");
    });
    expect(predictOrder()).toEqual(actual);
  });
});
