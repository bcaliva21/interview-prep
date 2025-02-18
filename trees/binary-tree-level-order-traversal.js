function levelOrder(root) {
	if (!root) return []
	const queue = [root]
	const output = []

	while (queue.length) {
		const levelLength = queue.length
		const level = []

		for (let i = 0; i < levelLength; i++) {
			const node = queue.shift()
			level.push(node.val)
			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
		}

		output.push(level)
	}

	return output
}
