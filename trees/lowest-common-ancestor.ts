class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(!root) return root
	let current = root

	while (current) {
		if (current.val >= p.val && current.val <= q.val) {
			return current
		}
		if (current.val >= q.val && current.val <= p.val) {
			return current
		}
		if (current.val > p.val) {
			current = current.left
		} else {
			current = current.right
		}
	}

	return null
}
