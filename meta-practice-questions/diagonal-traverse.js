// <!-- description:start -->

// <p>Given an <code>m x n</code> matrix <code>mat</code>, return <em>an array of all the elements of the array in a diagonal order</em>.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>
// <img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0498.Diagonal%20Traverse/images/diag1-grid.jpg" style="width: 334px; height: 334px;" />
// <pre>
// <strong>Input:</strong> mat = [[1,2,3],[4,5,6],[7,8,9]]
// <strong>Output:</strong> [1,2,4,7,5,3,6,8,9]
// </pre>

// <p><strong class="example">Example 2:</strong></p>

// <pre>
// <strong>Input:</strong> mat = [[1,2],[3,4]]
// <strong>Output:</strong> [1,2,3,4]
// </pre>

// <p>&nbsp;</p>
// <p><strong>Constraints:</strong></p>

// <ul>
// 	<li><code>m == mat.length</code></li>
// 	<li><code>n == mat[i].length</code></li>
// 	<li><code>1 &lt;= m, n &lt;= 10<sup>4</sup></code></li>
// 	<li><code>1 &lt;= m * n &lt;= 10<sup>4</sup></code></li>
// 	<li><code>-10<sup>5</sup> &lt;= mat[i][j] &lt;= 10<sup>5</sup></code></li>
// </ul>

// <!-- description:end -->

// <strong>Input:</strong> mat = [[1,2,3],[4,5,6],[7,8,9]]
// <strong>Output:</strong> [1,2,4,7,5,3,6,8,9]
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
i = 3
j = 2
ROWS = 3
COLS = 3
m = false
res = [1, 2, 4, 7, 5, 3, 6, 8, 9]

function findDiagonalOrder(mat) {
    const res = [];
    const ROWS = mat.length;
    const COLS = mat[0].length;
    let i = 0;
    let j = 0;
    let m = true;
    while (res.length !== ROWS * COLS) {
        if (m) {
            while (i >= 0 && j < COLS) {
                res.push(mat[i][j]);
                i--;
                j++;
            }
            if (j === COLS) {
                j--;
                i++;
            }
            i++;
        } else {
            while (i < ROWS && j >= 0) {
                res.push(mat[i][j]);
                i++;
                j--;
            }
            if (i === ROWS) {
                i--;
                j++;
            }
            j++;
        }
        m = !m;
    }
    return res;
}
