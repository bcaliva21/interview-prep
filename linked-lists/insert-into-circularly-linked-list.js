function insert(node, insertVal) {
    const newNode = new Node(insertVal)
    if (!node) {
        node = newNode
        node.next = newNode
        return newNode
    }

    let prev = node
    let cur = node.next

    if (cur == null) {
        newNode.next = prev
        prev.next = newNode
        return node
    }

    while (cur != node) {
        if ((prev.val <= insertVal && insertVal <= cur.val) ||
            (prev.val > cur.val && (insertVal >= prev.val || insertVal <= cur.val))) {
            break
        }
        prev = cur
        cur = cur.next
    }
    prev.next = newNode
    newNode.next = cur

    return node
}

class Node {
    constructor(val, next) {
        this.val = val !== undefined ? val : 0
        this.next = next !== undefined ? next : null
    }
}

const node5 = new Node(5)
const node3 = new Node(3, node5)
const node2 = new Node(2, node3)
const node1 = new Node(1, node2)
node5.next = node1

