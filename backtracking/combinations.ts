function combine(n: number, k: number): number[][] {
	const arr: number[] = Array.from(Array(n), (_,i) => i+1)
	const results: number[][] = []

	function backtrack(index: number, slate: number[]): void {
		if (slate.length === k) {
			results.push(slate.slice())
			return
		}
		if (index >= n) return

		backtrack(index+1,slate.slice())
		slate.push(arr[index])
		backtrack(index+1,slate.slice())
		slate.pop()
	}

	backtrack(0,[])

	return results
}
