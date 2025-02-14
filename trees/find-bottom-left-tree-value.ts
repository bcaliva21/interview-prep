class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}

function findBottomLeftValue(root: TreeNode | null): number {
	if (!root) return null
	if (!root.left && !root.right) return root.val

	const queue = [root]
	let bottomLeft
	while (queue.length) {
		let level = queue.length
		bottomLeft = queue[0]

		for (let i = 0; i < level ; i++) {
			const node = queue.shift()
			if (node.left) queue.push(node.left)
			if (node.right) queue.push(node.right)
		}
	}

	return bottomLeft.val
}
