function subarraySum(nums, k) {
	let res = 0
	let curSum = 0
	let prefixSums = { 0:1 }

	for (let n of nums) {
		curSum += n
		let diff = curSum - k
		res += prefixSums[diff] || 0
		prefixSums[curSum] = 1 + (prefixSums[curSum] || 0)
	}

	return res
}
