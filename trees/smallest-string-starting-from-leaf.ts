class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}

function smallestFromLeaf(root: TreeNode | null): string {
	if (!root) return ""

	let register = ""
	let resString = ""

	function dfs(node: TreeNode | null): void {
		if (!node) return

		register = String.fromCharCode(node.val + 97) + register

		if (!node.left && !node.right) {
			resString = resString === "" || resString > register ? register : resString
		}

		node.left && dfs(node.left)
		node.right && dfs(node.right)

		register = register.slice(1)
		return
	}

	dfs(root)
	return resString
}

console.log(smallestFromLeaf(new TreeNode(0, new TreeNode(1,new TreeNode(3), new TreeNode(4)),new TreeNode(2,new TreeNode(3), new TreeNode(4)))))
console.log(smallestFromLeaf(new TreeNode(0, null,new TreeNode(1))))

