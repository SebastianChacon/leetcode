import { describe, it, expect, vi } from "vitest";
import { EventEmitter } from "./03-typed-event-emitter";

type Events = {
  login: [user: string];
  logout: [];
  error: [code: number, message: string];
};

describe("03 - typed EventEmitter", () => {
  it("calls listeners with the emitted arguments, in order", () => {
    const em = new EventEmitter<Events>();
    const calls: string[] = [];
    em.on("error", (code, msg) => calls.push(`first ${code} ${msg}`));
    em.on("error", (code) => calls.push(`second ${code}`));
    expect(em.emit("error", 404, "Not found")).toBe(true);
    expect(calls).toEqual(["first 404 Not found", "second 404"]);
  });

  it("emit returns false when nobody listens", () => {
    const em = new EventEmitter<Events>();
    expect(em.emit("logout")).toBe(false);
  });

  it("on() returns an unsubscribe function", () => {
    const em = new EventEmitter<Events>();
    const fn = vi.fn();
    const unsubscribe = em.on("login", fn);
    em.emit("login", "ada");
    unsubscribe();
    em.emit("login", "bo");
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("ada");
  });

  it("off() removes a specific listener", () => {
    const em = new EventEmitter<Events>();
    const a = vi.fn();
    const b = vi.fn();
    em.on("logout", a);
    em.on("logout", b);
    em.off("logout", a);
    em.emit("logout");
    expect(a).not.toHaveBeenCalled();
    expect(b).toHaveBeenCalledTimes(1);
    expect(em.listenerCount("logout")).toBe(1);
  });

  it("once() listeners run only one time", () => {
    const em = new EventEmitter<Events>();
    const fn = vi.fn();
    em.once("login", fn);
    em.emit("login", "ada");
    em.emit("login", "bo");
    expect(fn).toHaveBeenCalledTimes(1);
    expect(em.listenerCount("login")).toBe(0);
  });

  it("type-checks event names and arguments", () => {
    const em = new EventEmitter<Events>();
    em.on("login", () => {});
    // @ts-expect-error - wrong argument type
    expect(() => em.emit("login", 42)).not.toThrow();
    // @ts-expect-error - unknown event
    em.on("unknown", () => {});
  });
});
