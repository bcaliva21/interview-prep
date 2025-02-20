function nextPermutation(nums) {
	let pivot = -1

	for (let i = nums.length - 1; i > -1; i--) {
		if (nums[i] > nums[i-1]) {
			pivot = i - 1
			break
		}
	}

	if (pivot < 0) {
		nums.reverse()
		return
	}

	let swap = nums.length - 1

	// 1 2 3 7 6 5
	//     p     s
	while (nums[swap] <= nums[pivot]) {
		swap--
	}

	[nums[swap],nums[pivot]] = [nums[pivot], nums[swap]]

	let l = pivot + 1
	let r = nums.length - 1

	while (l < r) {
		[nums[l],nums[r]] = [nums[r],nums[l]]
		l++
		r--
	}
}
