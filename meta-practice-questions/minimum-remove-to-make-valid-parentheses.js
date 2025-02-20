function minRemoveToMakeValid(s) {
	let l = 0
	let r = 0
	const stack = []

	for (let c of s) {
		if (c === '(') {
			l++
			stack.push(c)
		} else if (c === ')') {
			if (l > r) {
				r++
				stack.push(c)
			}
		} else {
			stack.push(c)
		}
	}

	if (l === r) {
		return stack.join('')
	}

	let result = []

	for (let i = stack.length - 1; i > -1; i--) {
		const c = stack[i]
		if (c === '(') {
			if (l <= r) {
				result.push(c)
			} else {
				l--
			}
		} else {
			result.push(c)
		}
	}

	return result.reverse().join('')
}

// 'lee(t(c)o)de)'
// 'lee(t(c)o)de'

// l = 2
// r = 2
	



// ))((
// '(('
// l = 2
// r = 0

