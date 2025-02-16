function subsets(num: number[]): number[][] {
	const results: number[][] = []
	function backtrack(slate: number[], index: number): void {
		if (index >= num.length) {
			results.push(slate)
			return
		}
		slate.push(num[index])
		backtrack(slate.slice(), index+1)
		slate.pop()
		backtrack(slate.slice(), index+1)
	}

	backtrack([],0)
	return results
}
