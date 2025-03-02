// <!-- description:start -->

// <p>Given an <code>m x n</code> <code>matrix</code>, return&nbsp;<em><code>true</code>&nbsp;if the matrix is Toeplitz. Otherwise, return <code>false</code>.</em></p>

// <p>A matrix is <strong>Toeplitz</strong> if every diagonal from top-left to bottom-right has the same elements.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>
// <img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0700-0799/0766.Toeplitz%20Matrix/images/ex1.jpg" style="width: 322px; height: 242px;" />
// <pre>
// <strong>Input:</strong> matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// <strong>Output:</strong> true
// <strong>Explanation:</strong>
// In the above grid, the&nbsp;diagonals are:
// &quot;[9]&quot;, &quot;[5, 5]&quot;, &quot;[1, 1, 1]&quot;, &quot;[2, 2, 2]&quot;, &quot;[3, 3]&quot;, &quot;[4]&quot;.
// In each diagonal all elements are the same, so the answer is True.
// </pre>

// <p><strong class="example">Example 2:</strong></p>
// <img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0700-0799/0766.Toeplitz%20Matrix/images/ex2.jpg" style="width: 162px; height: 162px;" />
// <pre>
// <strong>Input:</strong> matrix = [[1,2],[2,2]]
// <strong>Output:</strong> false
// <strong>Explanation:</strong>
// The diagonal &quot;[1, 2]&quot; has different elements.
// </pre>

// <p>&nbsp;</p>
// <p><strong>Constraints:</strong></p>

// <ul>
// 	<li><code>m == matrix.length</code></li>
// 	<li><code>n == matrix[i].length</code></li>
// 	<li><code>1 &lt;= m, n &lt;= 20</code></li>
// 	<li><code>0 &lt;= matrix[i][j] &lt;= 99</code></li>
// </ul>

// <p>&nbsp;</p>
// <p><strong>Follow up:</strong></p>

// <ul>
// 	<li>What if the <code>matrix</code> is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?</li>
// 	<li>What if the <code>matrix</code> is so large that you can only load up a partial row into the memory at once?</li>
// </ul>

// <!-- description:end -->


function isToeplitz(matrix) {
    const ROWS = matrix.length
    const COLS = matrix[0].length
    let i = 0,
        j = 0
    let target = matrix[i++][j++]
    while (i < ROWS && j < COLS) {
        if (matrix[i++][j++] !== target) {
            return false
        }
    }

    return true
}

console.log(isToeplitz([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
]))

console.log(isToeplitz([[1,2],[2,2]]))
// <strong>Input:</strong> matrix = [[1,2],[2,2]]

// prev is a tuple [row,col]
// function isToeplitz(matrixRow, target = null, prev = []) {
// 	if (target && prev.length > 0 && matrixRow.length > 0) {
// 		const [i,j] = prev
// 		return matrixRow[i+1][j+1] === target
// 	}
// }

// 1 2 3 4 5
// 2 1 3 4 5
// 2 2 1 2 2 
// 2 3 3 1 3 
// 2 3 2 3 1
//
//
