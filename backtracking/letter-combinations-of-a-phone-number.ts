function letterCombinations(digits: string): string[] {
	if (digits === "") return []
	const results: string[] = []

	const map: any = {
		"2": ['a','b','c'],
		"3": ['d','e','f'],
		"4": ['g','h','i'],
		"5": ['j','k','l'],
		"6": ['m','n','o'],
		"7": ['p','q','r','s'],
		"8": ['t','u','v'],
		"9": ['w','x','y','z']
	}

	function backtrack(index: number, slate: string[]): void {
		if (slate.length === digits.length) {
			results.push(slate.join(''))
			return
		}

		const combos = map[digits[index]]

		for (let letter of combos) {
			slate.push(letter)
			backtrack(index+1,slate.slice())
			slate.pop()
		}
	}

	backtrack(0,[])
	return results
}
