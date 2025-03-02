function longestRepeat(s, k) {
    const freq = {}
    let l = 0
    let mx = 0
    for (let r = 0; r < s.length; r++) {
        const char = s[r]
        freq[char] = (freq[char] || 0) + 1
        mx = Math.max(mx, freq[char])
        if (r - 1 + 1 - mx > k) {
            freq[char] -= 1
            l++
        }
    }

    return s.length - l
}

console.log(longestRepeat('ABBA', 2))

// init an empty map
// init lPtr
// init a max var
// iterate over s
	// if the current character is in our freq map increment it/otherwise init it to 1
	// see if the current character freq count is higher than the current mx
	// take the number of elements and subtract the mx freq count, if this value is greater than k
		// decrement the freq count of the current charater
		// increment l by one
// return the length of the string by the lPtr
