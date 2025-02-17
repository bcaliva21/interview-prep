function numTilePossibilities(tiles: string): number {
	const counts: { [key: string]: number } = {}

	for (let tile of tiles) {
		if (counts[tile]) {
			counts[tile] += 1
		} else {
			counts[tile] = 1
		}
	}

	function backtrack(counts: {[key:string]:number}): number {
		let total = 0
		for (let count in counts) {
			if (counts[count] === 0) continue

			total++
			counts[count]--
			total += backtrack(counts)
			counts[count]++
		}

		return total
	}

	return backtrack(counts)
}

