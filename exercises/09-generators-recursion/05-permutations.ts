/**
 * 05 - permutations & subsets (backtracking)         Difficulty: Medium
 *
 * permutations(nums)  (LeetCode #46)
 *   All possible orderings of distinct numbers.
 *   permutations([1, 2, 3]);
 *   // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]  (any order)
 *
 * subsets(nums)  (LeetCode #78)
 *   All possible subsets (the "power set"), including [] and nums itself.
 *   subsets([1, 2, 3]);
 *   // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]  (any order)
 *
 * Backtracking template:
 *   function backtrack(current) {
 *     if (done) { results.push([...current]); return; }
 *     for (const choice of choices) {
 *       current.push(choice);   // choose
 *       backtrack(current);     // explore
 *       current.pop();          // un-choose
 *     }
 *   }
 *
 * Concepts: recursion, backtracking, copying arrays at the right moment.
 */
export function permutations(nums: number[]): number[][] {
  throw new Error("Not implemented");
}

export function subsets(nums: number[]): number[][] {
  throw new Error("Not implemented");
}
