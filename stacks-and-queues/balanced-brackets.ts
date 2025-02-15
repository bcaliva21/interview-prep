function isBalanced(s: string): string {
	const stack = []
	let VALID = true

	for (let char of s) {
		if (char === '(' || char === '{' || char === '[') {
			stack.push(char)
			continue
		}

		const test = stack.pop()
		if (char === ')' && test !== '(') {
			VALID = false// not valid
			break
		}
		if (char === '}' && test !== '{') {
			VALID = false// not valid
			break
		}		
		if (char === ']' && test !== '[') {
			VALID = false// not valid
			break
		}
	}

	if (stack.length > 0) return 'NO'
	return VALID ? 'YES' : 'NO'
}
