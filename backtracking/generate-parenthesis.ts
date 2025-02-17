function generateParenthesis(n: number): string[] {
	const results: string[] = []

	function backtrack(open: number, close: number, slate: string[]): void {
		if (open === n && close === n) {
			results.push(slate.join(''))
			return
		}

		if (open < n) {
			slate.push('(')
            backtrack(open+1,close,slate.slice())
            slate.pop()
		}

		if (close < open) {
			slate.push(')')
            backtrack(open,close+1,slate.slice())
            slate.pop()
		}
	}

	backtrack(0,0,[])

	return results
}
