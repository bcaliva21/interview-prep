var maxAreaOfIsland = function(grid) {
  let maxArea = 0
  const ROW_LEN = grid.length
  const COL_LEN = grid[0].length
  const visited = Array.from(Array(ROW_LEN), () => Array.from(Array(COL_LEN), () => false))

  for (let i = 0; i < ROW_LEN; i++) {
    for (let j = 0; j < COL_LEN; j++) {
      if (visited[i][j]) continue
      visited[i][j] = true
      if (grid[i][j] === 1) {
        let area = 1
        const queue = []

        if (j+1 < COL_LEN && grid[i][j+1] === 1) queue.push([i,j+1])
        if (i+1 < ROW_LEN && grid[i+1][j] === 1) queue.push([i+1,j])
        if (j-1 > -1 && grid[i][j-1] === 1) queue.push([i,j-1])
        if (i-1 > -1 && grid[i-1][j] === 1) queue.push([i-1,j])

        while (queue.length) {
          const ql = queue.length
          for (let k = 0; k < ql; k++) {
            const [row,col] = queue.shift()
            if (visited[row][col]) continue
            visited[row][col] = true

            if (col+1 < COL_LEN && grid[row][col+1] === 1) queue.push([row,col+1])
            if (row+1 < ROW_LEN && grid[row+1][col] === 1) queue.push([row+1,col])
            if (col-1 > -1 && grid[row][col-1] === 1) queue.push([row,col-1])
            if (row-1 > -1 && grid[row-1][col] === 1) queue.push([row-1,col])

            area++
          }
        }

        maxArea = Math.max(maxArea, area)
      }
    }
  }

  return maxArea
};
