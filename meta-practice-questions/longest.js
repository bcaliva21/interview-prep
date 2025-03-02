function longest(s, k) {
    const freq = {}
    let max = 0
    let l = 0
    for (let r = 0; r < s.length; r++) {
        const char = s[r]
        freq[char] = (freq[char] || 0) + 1
        max = Math.max(max, freq[char])
        if (r - l + 1 - max > k) {
            freq[char]--
            l++
        }
    }

    return s.length - l
}

console.log(longest('ABBA', 2))
console.log(longest('ABBBBBA', 2))
