function cloneGraph(graph) {
    if (!graph) return graph
    const oldToNew = new Map()

    function clone(node) {
        if (oldToNew.has(node)) {
            return oldToNew.get(node)
        }

        const copy = new Node(node.val)
        for (let n of node.neighbors) {
            copy.neighbors.push(clone(n))
        }

        return copy
    }

    return clone(graph)
}
