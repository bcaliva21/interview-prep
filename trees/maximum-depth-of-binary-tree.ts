class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}

function maxDepth(root: TreeNode | null): number {
	if (!root) return 0

	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

