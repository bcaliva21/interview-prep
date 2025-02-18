function smallestNumber(pattern) {
	let stack = []
	let output = []

	for (let i = 0; i <= pattern.length; i++) {
		stack.push(i+1)

		if (pattern[i] === 'I' || i === pattern.length) {
			while (stack.length) {
				output.push(stack.pop().toString())
			}
		}

	return output.join('')
}
