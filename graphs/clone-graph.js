function cloneGraph(node) {
	if (!node) return node
	const clone = {}
	clone[node.val] = new _Node(node.val)
	const queue = [node]

	while (queue.length) {
		const cur = queue.shift()
		for (let n of cur.neighbors) {
			if (!clone[n.val]) {
				clone[n.val] = new _Node(n.val)
				queue.push(n)
			}
			clone[cur.val].neighbors.push(clone[n.val])
		}
	}

	return clone[node.val]
}
