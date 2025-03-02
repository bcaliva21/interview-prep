// Given a collection of candidate numbers candidates and a target number target, find all unique combinations in candidates
// where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

function combinationSum(candidates, target) {
    const ans = []
    candidates.sort()

    function backtrack(i = 0, leftover = target, slate = []) {
        if (leftover === 0) {
            ans.push(slate.slice())
            return
        }
        if (i >= candidates.length) {
            return
        }

        if (leftover - candidates[i] >= 0) {
            backtrack(i + 1, leftover - candidates[i], [...slate, candidates[i]])
            while (i + 1 < candidates.length && candidates[i + 1] === candidates[i]) {
                i++
            }
        }
        backtrack(i + 1, leftover, [...slate])
    }

	backtrack()
    return ans
}

console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8))
/**
[10,1,2,7,6,1,5]
 i
     b 
[1,1,2,5,6,7,10]
is (val === 0)
  push this to our ans array
is (idx > candidates.length - 1)
  return

[1,1,2]

*/
