var findDifferentBinaryString = function(nums) {
  const n = nums.length

  const options = [0,1]
  const possibilities = []

  function backtrack(idx = 0, slate = []) {
    if (slate.length === n) {
      possibilities.push(slate.join(''))
      return
    }
    if (idx >= options.length) return

    for (let i = idx; i < options.length; i++) {
      backtrack(idx, [...slate, options[i]])
    }
  }

  backtrack()

  for (let answer of possibilities) {
    if (nums.includes(answer)) {
        continue
    } else {
        return answer
    }
  }
};
