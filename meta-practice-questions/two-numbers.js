// <!-- description:start -->

// <p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum&nbsp;as a linked list.</p>

// <p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>
// <img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0002.Add%20Two%20Numbers/images/addtwonumber1.jpg" style="width: 483px; height: 342px;" />
// <pre>
// <strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]
// <strong>Output:</strong> [7,0,8]
// <strong>Explanation:</strong> 342 + 465 = 807.
// </pre>

// <p><strong class="example">Example 2:</strong></p>

// <pre>
// <strong>Input:</strong> l1 = [0], l2 = [0]
// <strong>Output:</strong> [0]
// </pre>

// <p><strong class="example">Example 3:</strong></p>

// <pre>
// <strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// <strong>Output:</strong> [8,9,9,9,0,0,0,1]
// </pre>

// <p>&nbsp;</p>
// <p><strong>Constraints:</strong></p>

// <ul>
// 	<li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li>
// 	<li><code>0 &lt;= Node.val &lt;= 9</code></li>
// 	<li>It is guaranteed that the list represents a number that does not have leading zeros.</li>
// </ul>

// <!-- description:end -->
//

class Node {
    constructor(val, next) {
        this.val = val === undefined ? -1 : val
        this.next = next === undefined ? null : next
    }
}

function addTwoNumbers(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    const dummy = new Node(0)
    let ptr1 = l1,
        ptr2 = l2,
        ptr3 = dummy
    let carry = 0

    while (ptr1 || ptr2) {
        let newNode
        if (ptr1 && !ptr2) {
            newNode = new Node(ptr1.val + carry)
            carry = 0
            ptr1 = ptr1.next
            ptr3.next = newNode
            ptr3 = ptr3.next
            continue
        }
        if (ptr2 && !ptr1) {
            newNode = new Node(ptr2.val + carry)
            carry = 0
            ptr2 = ptr2.next
            ptr3.next = newNode
            ptr3 = ptr3.next
            continue
        }
        let sum = ptr1.val + ptr2.val + carry
        newNode = new Node(sum % 10)
        carry = Math.floor(sum / 10)
        ptr1 = ptr1.next
        ptr2 = ptr2.next
        ptr3.next = newNode
        ptr3 = ptr3.next
    }

    return dummy.next
}

const node1 = new Node(2, new Node(4, new Node(3, new Node(9))))
const node2 = new Node(5, new Node(6, new Node(4)))

console.log(addTwoNumbers(node1, node2))
// carry = 

// 	we want to pass Math.floor(sum/10) onto next iteration

// l1 = [2,4,3,1]
// l2 = [5,6,4]
// l3 = [7,0,8,1]

// l1 9
// l2 9
// sum = 18
// we set cur l3 ptr val to sum % 10
// we set carry to Math.floor(sum/10)

// <strong>Output:</strong> [7,0,8]
// <strong>Explanation:</strong> 342 + 465 = 807.

// init three pointers
// l1,l2,l3 ptrs
// init carry to 0
// while l1 or l2 pointers exists
// if both ptrs exist
// calculate their sum l1 + l2 + carry
// determin if we need to use carry, sum > 9
