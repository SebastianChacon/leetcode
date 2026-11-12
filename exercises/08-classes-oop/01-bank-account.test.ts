import { describe, it, expect } from "vitest";
import { BankAccount } from "./01-bank-account";

describe("01 - BankAccount", () => {
  it("starts with the initial balance (default 0)", () => {
    expect(new BankAccount("Ada", 100).balance).toBe(100);
    expect(new BankAccount("Bo").balance).toBe(0);
    expect(new BankAccount("Ada").owner).toBe("Ada");
  });

  it("deposits and withdraws", () => {
    const acc = new BankAccount("Ada", 100);
    acc.deposit(50);
    acc.withdraw(30);
    expect(acc.balance).toBe(120);
  });

  it("validates amounts", () => {
    const acc = new BankAccount("Ada", 10);
    expect(() => acc.withdraw(1000)).toThrow("Insufficient funds");
    expect(() => acc.deposit(-5)).toThrow(RangeError);
    expect(() => acc.deposit(0)).toThrow("Amount must be positive");
    expect(() => acc.withdraw(-1)).toThrow(RangeError);
    expect(acc.balance).toBe(10);
  });

  it("balance cannot be changed from outside", () => {
    const acc = new BankAccount("Ada", 10);
    expect(() => {
      (acc as unknown as { balance: number }).balance = 1_000_000;
    }).toThrow(TypeError); // no setter -> TypeError in strict mode
    expect(acc.balance).toBe(10);
    expect(Object.keys(acc)).not.toContain("balance");
  });

  it("records a history and returns a copy", () => {
    const acc = new BankAccount("Ada");
    acc.deposit(50);
    acc.withdraw(20);
    expect(acc.getHistory()).toEqual([
      { type: "deposit", amount: 50 },
      { type: "withdraw", amount: 20 },
    ]);
    acc.getHistory().push({ type: "deposit", amount: 999 });
    expect(acc.getHistory()).toHaveLength(2);
  });
});
