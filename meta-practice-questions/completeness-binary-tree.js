// ## Description

// <!-- description:start -->

// <p>Given the <code>root</code> of a binary tree, determine if it is a <em>complete binary tree</em>.</p>

// <p>In a <strong><a href="http://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees" target="_blank">complete binary tree</a></strong>, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between <code>1</code> and <code>2<sup>h</sup></code> nodes inclusive at the last level <code>h</code>.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>
// <img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0958.Check%20Completeness%20of%20a%20Binary%20Tree/images/complete-binary-tree-1.png" style="width: 180px; height: 145px;" />
// <pre>
// <strong>Input:</strong> root = [1,2,3,4,5,6]
// <strong>Output:</strong> true
// <strong>Explanation:</strong> Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.
// </pre>

// <p><strong class="example">Example 2:</strong></p>
// <img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0958.Check%20Completeness%20of%20a%20Binary%20Tree/images/complete-binary-tree-2.png" style="width: 200px; height: 145px;" />
// <pre>
// <strong>Input:</strong> root = [1,2,3,4,5,null,7]
// <strong>Output:</strong> false
// <strong>Explanation:</strong> The node with value 7 isn&#39;t as far left as possible.
// </pre>

// <p>&nbsp;</p>
// <p><strong>Constraints:</strong></p>

// <ul>
// 	<li>The number of nodes in the tree is in the range <code>[1, 100]</code>.</li>
// 	<li><code>1 &lt;= Node.val &lt;= 1000</code></li>
// </ul>

// <!-- description:end -->


// [1,2,3,4,5,6]

// 		  1
// 	   2      3
// 	 4   5   6  7
//    8  9    10

// implement a bfs, we will use a queue
// as we get to a tree level, we will check if it is full, 
// we can use an incompleteLevel var and set it to true if we find an incomplete level
// if we reach a level deeper and have incopmleteLevel EQ true, we can return false
// we can create a noChildren variable that is false at the start of each level iteration
// once noChildren is set to true, if we encounter children later in that level iteration
// we can return false

class Tree {
    constructor(val, left, right) {
        this.val = val === undefined ? -1 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

const tree1 = new Tree(1, new Tree(2), new Tree(3))
const tree4 = new Tree(4, null, new Tree(5, null, new Tree(6)))

console.log(checkCompleteness(tree1))

function checkCompleteness(root) {
    if (!root) return null

    const queue = [root]
    let cont = true

    while (queue.length && cont) {
        let ql = queue.length
        for (let i = 0; i < ql; i++) {
            const node = queue.shift()
            if (node === null) {
                cont = false
                break
            }
            queue.push(node.left)
            queue.push(node.right)
        }
    }
    return queue.every(x => !x)
}


console.log(checkCompleteness(tree4))
