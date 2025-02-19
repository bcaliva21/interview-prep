var combinationSum3 = function(k, n) {
  const nums = Array.from(Array(9), (_,i) => i+1 )
  const result = []

  function backtrack(i = 0, sum = n, slate = []) {
    if (sum === 0 && slate.length === k) {
      result.push([...slate])
      return
    }
    if (i >= nums.length) return

    if (sum - nums[i] >= 0 && slate.length < k) {
      backtrack(i+1, sum - nums[i], [...slate, nums[i]])
    }

    backtrack(i+1, sum, [...slate])
  }

  backtrack()
  return result
};
