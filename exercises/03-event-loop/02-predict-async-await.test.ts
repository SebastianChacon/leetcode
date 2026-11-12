import { describe, it, expect } from "vitest";
import { predictOrder } from "./02-predict-async-await";
import { runSnippet } from "./_run-snippet";

describe("02 - predict async/await order", () => {
  it("matches the real execution order", async () => {
    const actual = await runSnippet((log) => {
      async function a() {
        log("a1");
        await b();
        log("a2");
      }
      async function b() {
        log("b");
      }
      log("start");
      a();
      log("end");
    });
    expect(predictOrder()).toEqual(actual);
  });
});
