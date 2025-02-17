function checkInclusion(s1, s2) {
	let s1Freq = {}

	for (let char of s1) {
		if (s1Freq[char]) {
			s1Freq[char] += 1
		} else {
			s1Freq[char] = 1
		}
	}

	let i = 0
	let j = s1.length - 1

	let windowFreq = {}

	for (let char of s2.slice(i,s1.length)) {
		if (windowFreq[char]) {
			windowFreq[char] += 1
		} else {
			windowFreq[char] = 1
		}
	}

	while (j < s2.length) {
		let foundMatch = false
		for (let key of Object.keys(windowFreq)) {
			if (s1Freq[key] === windowFreq[key]) {
				foundMatch = true
			} else {
				foundMatch = false
				break
			}
		}

		if (foundMatch) return true
        windowFreq[s2[i]] -= 1
			
        if (windowFreq[s2[i]] === 0) delete windowFreq[s2[i]]
		i++
		j++
		if (windowFreq[s2[j]]) {
			windowFreq[s2[j]] += 1
		} else {
			windowFreq[s2[j]] = 1
		}
	}

	return false
}
