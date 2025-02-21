function calculate(s) {
	let i = total = cur = prev = 0
	let curOp = '+'

	while (i < s.length) {
		let char = s[i]
		if (Number.isInteger(parseInt(char))) {
			while (i < s.length && Number.isInteger(parseInt(s[i]))) {
				cur = cur * 10 + parseInt(s[i])
				i++
			}
			i--

			if (curOp === '+') {
				total += cur
				prev = cur
			} else if (curOp === '-') {
				total -= cur
				prev = -cur
			} else if (curOp === '*') {
				total -= prev
				total += prev * cur

				prev = prev * cur
			} else {
				total -= prev
				total += parseInt(prev/cur)
				prev = parseInt(prev/cur)
			}

			cur = 0
		} else if (char != ' ') {
			curOp = char
		}

		i++
	}

	return total
}
