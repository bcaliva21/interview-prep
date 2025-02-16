function combinationSum(candidates: number[], target: number): number[][] {
	const results: number[][] = []
	function backtrack(idx: number, curTarget: number, slate: number[]): void {
		if (curTarget === 0) {
			results.push(slate.slice())
			return
		}
		if (curTarget < 0) return

		for (let i = idx; i < candidates.length; i++) {
			slate.push(candidates[i])
			backtrack(i, curTarget-candidates[i],slate.slice())
			slate.pop()
		}
	}

	backtrack(0,target,[])
	return results
}
