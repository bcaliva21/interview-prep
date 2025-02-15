function icecreamParlor(m: number, arr: number[]): number[] {
	const map: Map<number, number> = new Map()

	for (let i = 0; i < arr.length;i++) {
		if (map.has(arr[i])) {
			let idx = map.get(arr[i]) // 2
			return [Math.min(i,idx!)+1,Math.max(i,idx!)+1]
		}
		map.set(m-arr[i], i)
	}

	return [0,0]
}

