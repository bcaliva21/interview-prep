function permuteUnique(nums: number[]): number[][] {
	if (nums.length === 0) return [[]]

	const permutations: number[][] = permuteUnique(nums.slice(1))
	const results: number[][] = []

	for (let permutation of permutations) {
		for (let i = 0; i < permutation.length+1; i++) {
			const slate = permutation.slice()
			slate.splice(i, 0, nums[0])

			if (results.length === 0) {
				results.push(slate)
				continue
			}

			const resultsJSON = JSON.stringify(results)
			const slateJSON = JSON.stringify(slate)
			if (!resultsJSON.includes(slateJSON)) {
				results.push(slate)
			}
		}
	}

	return results
}
