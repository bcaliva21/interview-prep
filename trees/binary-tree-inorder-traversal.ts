class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}

function inorderTraversalNaive(root: TreeNode | null): number[] {
	const results = []

	function dfs(root: TreeNode | null) {
		if (!root) return
		dfs(root.left)
		results.push(root.val)
		dfs(root.right)
	}

	dfs(root)
	return results
}

function inorderTraversalBaller(root: TreeNode | null): number[] {
	if (!root) return []

	return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right))
}

