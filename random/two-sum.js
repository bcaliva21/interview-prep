function twoSum(nums, target) {
	const map = new Map()

	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			return [i, map.get(nums[i])]
		}
		const diff = target - nums[i]
		map.set(diff, i)
	}
}
