function isValidSudoku(board: string[][]): boolean {
	const row = Array.from(Array(9), () => ({}))
	const col = Array.from(Array(9), () => ({}))
	const box = Array.from(Array(3), () => Array.from(Array(3), () => ({})))

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			const cell = board[i][j]
			if (cell === '.') continue
			if (row[i][cell]) {
				return false
			} else {
				row[i][cell] = true
			}
			if (col[j][cell]) {
				return false
			} else {
				col[j][cell] = true
			}
			const boxRow = Math.floor(i/3)
			const colRow = Math.floor(j/3)
			if (box[boxRow][colRow][cell]) {
				return false
			} else {
				box[boxRow][colRow][cell] = true
			}
		}
	}
	
	return true
}
