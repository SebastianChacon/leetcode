# TypeScript Mastery 🧠

45 hands-on TypeScript exercises with tests. They cover the topics that come up most in interviews and real-world problem solving: Promises, async/await, the event loop, Set, Map, the type system, closures, OOP, generators and recursion.

Each exercise is a file with instructions, examples and hints, plus a function stub that throws `"Not implemented"`. Your job is to make its `.test.ts` file pass.

## Getting started

```bash
npm install
npm test                       # watch mode, re-runs as you save
npx vitest exercises/04-set    # only one topic
npx vitest 02-two-sum          # only one exercise
npm run typecheck              # strict TypeScript check of everything
```

> Type-level exercises (`06-type-system/03` and `04`) are checked by the TypeScript compiler. Their failures show up under **Type Errors** in the test output.

## Workflow

1. Open an exercise, read the comment and solve it **without looking at the test** first.
2. Run its test. Red ➜ fix ➜ green.
3. Ask yourself: *What's the time/space complexity? How would I explain this in an interview?*
4. Tick it below and commit: `git commit -m "solve(set): longest consecutive"`

## Progress

### 01 · Promises
- [ ] 01 sleep
- [ ] 02 promisify
- [ ] 03 promiseAll (build your own)
- [ ] 04 withTimeout
- [ ] 05 promiseAllSettled (build your own)

### 02 · async / await
- [ ] 01 getUserDisplayName (try/catch)
- [ ] 02 retry
- [ ] 03 runSequentially
- [ ] 04 mapWithConcurrency ⭐ hard
- [ ] 05 pipeAsync

### 03 · Sync vs Async (Event Loop)
- [ ] 01 predict output: basic
- [ ] 02 predict output: async/await
- [ ] 03 predict output: nested ⭐ hard
- [ ] 04 batchCalls (microtasks)
- [ ] 05 processInChunks (don't block the loop)

### 04 · Set
- [ ] 01 uniqueValues
- [ ] 02 union / intersection / difference
- [ ] 03 containsDuplicate (LC #217)
- [ ] 04 longestConsecutive (LC #128)
- [ ] 05 lengthOfLongestSubstring (LC #3)

### 05 · Map
- [ ] 01 wordFrequency
- [ ] 02 twoSum (LC #1)
- [ ] 03 groupAnagrams (LC #49)
- [ ] 04 groupBy
- [ ] 05 LRUCache (LC #146)

### 06 · Type System
- [ ] 01 discriminated unions & assertNever
- [ ] 02 generic functions (keyof, Pick, Omit)
- [ ] 03 mapped types (rebuild Partial, Readonly, Pick, Record...)
- [ ] 04 conditional types & infer ⭐ hard
- [ ] 05 type guards for `unknown`

### 07 · Arrays & Closures
- [ ] 01 createCounter
- [ ] 02 memoize
- [ ] 03 debounce
- [ ] 04 curry ⭐ hard
- [ ] 05 build your own map / filter / reduce

### 08 · Classes & OOP
- [ ] 01 BankAccount (#private fields)
- [ ] 02 abstract shapes & inheritance
- [ ] 03 typed EventEmitter
- [ ] 04 Stack & Queue + valid parentheses (LC #20)
- [ ] 05 Temperature (getters, setters, static)

### 09 · Generators & Recursion
- [ ] 01 range generator
- [ ] 02 fibonacci + lazy take/map/filter
- [ ] 03 flatten
- [ ] 04 deepClone (+ circular refs bonus)
- [ ] 05 permutations & subsets (backtracking)

## Other languages

- `python/`: earlier LeetCode solutions in Python.
