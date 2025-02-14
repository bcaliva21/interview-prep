class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}

function largestValues(root: TreeNode | null): number[] {
	if (!root) return []
	const queue = [root]
	const largestValues = []

	while (queue.length) {
		const levelLength = queue.length
		let max = -Infinity
		for (let i = 0; i < levelLength;i++) {
			const node = queue.shift()
			if (node.val > max) {
				max = node.val
			}
			if (node.left) queue.push(node.left)
			if (node.right) queue.push(node.right)
		}
		largestValues.push(max)
	}

	return largestValues
}


