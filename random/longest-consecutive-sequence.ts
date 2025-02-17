function longestConsecutive(nums: number[]): number {
	const set = new Set(nums)
	let maxLen = 0

	for (let num of set) {
		if (set.has(num) && !set.has(num-1)) {
			let counter = 1
			let i = 1
			while (set.has(num+i)) {
				counter++
				i++
			}
			maxLen = Math.max(maxLen, counter)
		}
	}

	return maxLen
}
