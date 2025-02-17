function dailyTemperatures(temps: number[]): number[] {
	const answer = Array.from(Array(temps.length), () => 0)
	const stack = []

	for (let i = 0; i < temps.length; i++) {
		while (stack.length > 0 && temps[i] > temps[stack[stack.length-1]]) {
			let index = stack.pop()
			answers[index] = i - index
		}
		stack.push(i)
	}

	return answer
}
