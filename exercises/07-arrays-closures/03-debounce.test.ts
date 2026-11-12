import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { debounce } from "./03-debounce";

describe("03 - debounce", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("does not call fn immediately", () => {
    const fn = vi.fn();
    debounce(fn, 100)();
    expect(fn).not.toHaveBeenCalled();
  });

  it("calls fn once after the delay, with the last arguments", () => {
    const fn = vi.fn();
    const d = debounce(fn, 100);
    d("h");
    vi.advanceTimersByTime(50);
    d("he");
    vi.advanceTimersByTime(50);
    d("hel");
    vi.advanceTimersByTime(99);
    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("hel");
  });

  it("can fire again after a quiet period", () => {
    const fn = vi.fn();
    const d = debounce(fn, 100);
    d(1);
    vi.advanceTimersByTime(100);
    d(2);
    vi.advanceTimersByTime(100);
    expect(fn.mock.calls).toEqual([[1], [2]]);
  });

  it("cancel() prevents the pending call", () => {
    const fn = vi.fn();
    const d = debounce(fn, 100);
    d();
    d.cancel();
    vi.advanceTimersByTime(200);
    expect(fn).not.toHaveBeenCalled();
  });
});
