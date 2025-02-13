class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (!p && !q) return true
	if (p && !q || q && !p || p?.val !== q?.val) return false

	if (!isSameTree(p?.left || null, q?.left || null)) return false
	if (!isSameTree(p?.right || null, q?.right || null)) return false

	return true
}

const t1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
const t2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))

console.log(isSameTree(t1, t2))
