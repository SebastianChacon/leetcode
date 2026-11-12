/**
 * 01 - BankAccount (encapsulation)                   Difficulty: Easy
 *
 * Build a class whose balance can ONLY change through its methods.
 * Use a real private field (`#balance`), not just TypeScript's `private`
 * (TS `private` disappears at runtime; `#` is enforced by JavaScript).
 *
 *   const acc = new BankAccount("Ada", 100);
 *   acc.deposit(50);    // balance 150
 *   acc.withdraw(30);   // balance 120
 *   acc.balance;        // 120  (read-only getter, no setter)
 *   acc.withdraw(1000); // throws Error("Insufficient funds")
 *   acc.deposit(-5);    // throws RangeError("Amount must be positive")
 *   acc.getHistory();   // [{ type: "deposit", amount: 50 }, { type: "withdraw", amount: 30 }]
 *
 * getHistory() must return a COPY (mutating it must not affect the account).
 * Same "positive amount" rule applies to withdraw.
 *
 * Concepts: constructor, `#private` fields, getters, readonly props, validation.
 */
export interface Transaction {
  type: "deposit" | "withdraw";
  amount: number;
}

export class BankAccount {
  constructor(
    public readonly owner: string,
    initialBalance = 0,
  ) {
    throw new Error("Not implemented");
  }

  get balance(): number {
    throw new Error("Not implemented");
  }

  deposit(amount: number): void {
    throw new Error("Not implemented");
  }

  withdraw(amount: number): void {
    throw new Error("Not implemented");
  }

  getHistory(): Transaction[] {
    throw new Error("Not implemented");
  }
}
