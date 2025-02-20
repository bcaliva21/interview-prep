class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? -1 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function binaryTreeVerticalOrder(root) {
  if (!root) return []

  const map = {}
  const result = []

  const queue = [[root, 0]]
  while (queue.length) {
    const qLen = queue.length

    for (let i = 0; i < qLen; i++) {
      const [node, col] = queue.shift()
      if (map[col]) {
        map[col].push(node.val)
      } else {
        map[col] = [node.val]
      }

      if (node.left) queue.push([node.left, col-1])
      if (node.right) queue.push([node.right, col+1])
    }
  }

  const keys = Object.keys(map).sort()
  for (let key of keys) {
    result.push(map[key])
  }

  return result
}

console.log(binaryTreeVerticalOrder(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))))
