function minEatingSpeed(piles, h) {
	let min = 1
	let max = Math.max(...piles)
	let best = max

	function helper(speed) {
		return piles.reduce((acc, cv) => {
			return acc + Math.ceil(cv/speed)
		},0)
	}

	while (min <= max) {
		let mid = Math.floor((min+max)/2)
		if (helper(mid) <= h) {
			best = mid
			max = mid - 1
		} else {
			min = mid + 1
		}
	}

	return best
}
