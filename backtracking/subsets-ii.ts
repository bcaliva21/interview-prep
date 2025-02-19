function subsetsWithDup(nums) {
	const result = []
	nums.sort()

	function backtrack(i = 0, slate = []) {
		if (i >= nums.length) {
			result.push(slate.slice())
			return
		}

		slate.push(nums[i])
		backtrack(i+1, slate.slice())
		slate.pop()
		while (i + 1 < nums.length && nums[i] === nums[i+1]) {
			i++
		}
		backtrack(i+1,slate.slice())
	}

	backtrack()
	return result
}
