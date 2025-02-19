function combinationSum2(candidates, target) {
	const result = []
	candidates.sort()

	function backtrack(i = 0, sum = target, slate = []) {
		if (sum === 0) {
			result.push([...slate])
			return
		}
		if (i >= candidates.length) return

		if (sum - candidates[i] >= 0) {
			backtrack(i+1, sum - candidates[i], [...slate, candidates[i]])
			while (i+1 < candidates.length && candidates[i] === candidates[i+1]) {
				i++
			}
		}
		backtrack(i+1, sum, [...slate])
	}

	backtrack()
	return result
}
