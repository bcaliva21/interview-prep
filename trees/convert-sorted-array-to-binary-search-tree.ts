class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
	function createBST(nums: number[]): TreeNode | null {
		if (!nums.length) return null
		const mid = Math.floor(nums.length/2)
		const root = new TreeNode(nums[mid])
		if (mid === 0) return root
		root.left = createBST(nums.slice(0, mid))
		root.right = createBST(nums.slice(mid+1))
		return root
	}

	return sortedArrayToBST(nums)
}
