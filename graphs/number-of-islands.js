/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islands = 0
  const ROW_LEN = grid.length
  const COL_LEN = grid[0].length
  const visited = Array.from(Array(ROW_LEN), () => Array.from(Array(COL_LEN), () => false))

  for (let i = 0; i < ROW_LEN; i++) {
    for (let j = 0; j < COL_LEN; j++) {
      if (visited[i][j]) continue
      if (grid[i][j] === '1') {
        const queue = []

        // check all of our neighbors
        if (j+1 < COL_LEN && grid[i][j+1] === '1') queue.push([i,j+1])
        if (i+1 < ROW_LEN && grid[i+1][j] === '1') queue.push([i+1,j])
        if (j-1 > -1 && grid[i][j-1] === '1') queue.push([i,j-1])
        if (i-1 > -1 && grid[i-1][j] === '1') queue.push([i-1,j])

        while (queue.length) {
          let ql = queue.length

          for (let k = 0; k < ql; k++) {
            const [row,col] = queue.shift()
            if (visited[row][col]) continue

            if (col+1 < COL_LEN && grid[row][col+1] === '1') queue.push([row,col+1])
            if (row+1 < ROW_LEN && grid[row+1][col] === '1') queue.push([row+1,col])
            if (col-1 > -1 && grid[row][col-1] === '1') queue.push([row,col-1])
            if (row-1 > -1 && grid[row-1][col] === '1') queue.push([row-1,col])

            visited[row][col] = true
          }
        }
        islands++
      }
      visited[i][j] = true
    }
  }

  return islands
};
