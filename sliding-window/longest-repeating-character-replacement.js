function characterReplacement(s,k) {
	const freq = {}
	let highest = 0
	let longest = 0

	let i = 0
	let j = 0

	while (j < s.length) {
		const rightChar = s[j]

		freq[rightChar] = freq[rightChar] + 1 || 1
		highest = Math.max(highest, freq[rightChar])

		while ((j - i + 1) - highest > k) {
			const leftChar = s[i]
			freq[leftChar] -= 1
			i++
		}

		longest = Math.max(longest, j - i + 1)

		j++
	}

	return longest
}
