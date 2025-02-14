class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}

function convertBST(root: TreeNode | null): TreeNode | null {
	let currentSum = 0
	function dfs(root: TreeNode | null): TreeNode | null {
		if (!root) return root
		root.right = dfs(root.right)
		root.val += currentSum
		currentSum = root.val
		root.left = dfs(root.left)
		return root
	}

	return dfs(root)
}
