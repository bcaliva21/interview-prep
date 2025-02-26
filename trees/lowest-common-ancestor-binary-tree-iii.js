 class Node {
     constructor(val, left, right, parent) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
         this.parent = (parent===undefined ? null : parent)
     }
 }
function lowestCommonAncestor(p,q) {
  let pCopy = p
  let qCopy = q

  while (pCopy !== qCopy) {
    pCopy = pCopy.parent ? pCopy.parent : q
    qCopy = qCopy.parent ? qCopy.parent : p
  }

  return pCopy
}

