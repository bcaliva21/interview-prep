class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}

function recoverTree(root: TreeNode | null): void {
	if (!root) return
	let order = []

	function inorderTraversal(node: TreeNode | null) {
		if (!node) return
		if (node.left) inorderTraversal(node.left)
		order.push(node)
		if (node.right) inorderTraversal(node.right)
	}
	
	inorderTraversal(root)

	let sorted = order.clone()
	sorted.sort((a,b) => a.val > b.val ? 1 : 0)

	for (let i = 0; i < sorted.length; i++) {
		order[i].val = sorted[i].val
	}
}
