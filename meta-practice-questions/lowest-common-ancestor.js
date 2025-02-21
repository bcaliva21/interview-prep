function lowestCommonAncestor(root, p, q) {
    if (!root) return root
    if (root.val === q.val || root.val === p.val) return true

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    if (left === null) return right
    if (right === null) return left

    return root
}
