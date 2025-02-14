class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
	if (!root) return [root]
	const deleted = []
	const roots = []

	function dfs(root: TreeNode | null) {
		if (!root) return null
		if (to_delete.includes(root.left.val)) {
			deleted.push(root.left)
			root.left = null
		}
		if (to_delete.includes(root.right.val)) {
			deleted.push(root.right)
			root.right = null
		}
		if (root.left) dfs(root.left)
		if (root.right) dfs(root.right)
	}
	dfs(root)

	for (let del of deleted) {
		if (del.left) roots.push(del.left)
		if (del.right) roots.push(del.right)
	}

	roots.push(root)

	return roots
}
