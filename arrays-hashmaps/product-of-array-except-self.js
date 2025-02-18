function productExceptSelf(nums) {
	const output = Array.from(Array(nums.length))

	let scratch = 1
	for (let i = 0; i < nums.length; i++) {
		output[i] = scratch
		scratch *= nums[i]
	}

	scratch = 1
	for (let i = nums.length-1; i < -1; i--) {
		output[i] *= scratch
		scratch *= nums[i]
	}

	return output
}
