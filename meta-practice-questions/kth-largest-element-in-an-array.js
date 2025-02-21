function findKthLargest(nums,k) {
	k = nums.length - k

	function quickSelect(l = 0, r = nums.length - 1) {
		let pivot = nums[r]
		let p = l
		for (let i = l; i < r; i++) {
			if (nums[i] <= pivot) {
				[nums[i], nums[p]] = [nums[p], nums[i]]
				p++
			}
		}
		[nums[p], nums[r]] = [nums[r],nums[p]]

		if (k > p) {
			return quickSelect(p+1,r)
		} else if (p > k) {
			return quickSelect(l, p-1)
		} else {
			return nums[k]
		}
	}

	return quickSelect()
}
