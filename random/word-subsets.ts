function wordSubsets(words1: string[], words2: string[]): string[] {
	const map: Map<string, number> = new Map()

	for (let word of words2) {
		const miniMap: Map<string, number> = new Map()
		for (let char of word) {
			const count = miniMap.get(char)
			if (count) {
				miniMap.set(char, count+1)
			} else {
				miniMap.set(char, 1)
			}
		}
		for (let [key,val] of Array.from(miniMap)) {
			const currentMapCount = map.get(key)
			if (!currentMapCount) {
				map.set(key,val)
				continue
			}
			if (val > currentMapCount) {
				map.set(key,val)
			}
		}
	}

	const results = []

	for (let word of words1) {
		const wordMap: Map<string, number> = new Map()
		let VALID = true
		for (let char of word) {
			const count = wordMap.get(char)
			if (count) {
				wordMap.set(char, count+1)
			} else {
				wordMap.set(char, 1)
			}
		}
		for (let [key, val] of Array.from(map)) {
			const charWordCount = wordMap.get(key)
			if (!charWordCount || val > charWordCount) {
				VALID = false
				break;
			}
		}
		if (VALID) results.push(word)
	}

	return word
}
