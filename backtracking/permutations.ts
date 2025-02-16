function permute(nums: number[]): number[][] {
	if (nums.length === 0) return [[]]

	const permutations = permute(nums.slice(1))
	const results: number[][] = []

	for (let perm of permutations) {
		for (let i = 0; i < perm.length + 1; i++) {
			const slate = perm.slice()
			slate.splice(i, 0, nums[0])
			results.push(slate)
		}
	}

	return results
}
