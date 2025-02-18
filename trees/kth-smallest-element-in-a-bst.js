function kthSmallest(root, k) {
	let moves = 0
	let kth = -1

	function dfs(node) {
		if (!node || kth > -1) return

		if (node.left) dfs(node.left)
		moves++
		if (moves === k) kth = node.val
		if (node.right) dfs(node.right)
	}

	dfs(root)
	return kth
}
