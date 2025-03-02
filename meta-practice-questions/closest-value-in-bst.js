// ## Description

// <!-- description:start -->

// <p>Given the <code>root</code> of a binary search tree and a <code>target</code> value, return <em>the value in the BST that is closest to the</em> <code>target</code>. If there are multiple answers, print the smallest.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>
// <img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0270.Closest%20Binary%20Search%20Tree%20Value/images/closest1-1-tree.jpg" style="width: 292px; height: 302px;" />
// <pre>
// <strong>Input:</strong> root = [4,2,5,1,3], target = 3.714286
// <strong>Output:</strong> 4
// </pre>

// <p><strong class="example">Example 2:</strong></p>

// <pre>
// <strong>Input:</strong> root = [1], target = 4.428571
// <strong>Output:</strong> 1
// </pre>

// <p>&nbsp;</p>
// <p><strong>Constraints:</strong></p>

// <ul>
// 	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
// 	<li><code>0 &lt;= Node.val &lt;= 10<sup>9</sup></code></li>
// 	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
// </ul>

// 5
// / \
// 2   10
// / \  / \
// 1  3 7  12

// 4
// 2   5
// 1 3 

var closestValue = function(root, target) {
    let ans = 0
    let globalDiff = Infinity

    function dfs(node) {
        if (!node) return null

        const diff = Math.abs(target - node.val)
        if (diff < globalDiff || (diff === globalDiff && node.val < ans)) {
            globalDiff = diff
            ans = node.val
        }
        node = node.val < target ? node.right : node.left
        dfs(node)
    }

    dfs(root)

    return ans
};
