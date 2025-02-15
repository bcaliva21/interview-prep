class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}	

function isValidBST(root: TreeNode | null, min: number = -Infinity, max: number = Infinity): boolean {
	if (!root) return true
	if (root.val <= min) return false
	if (root.val >= max) return false
	return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
}
