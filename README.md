# interview-prep

## Trees
  - 100 Same Tree
    - Success
    - February 13
    - Notes: determine base cases and execute them with them
      - isSameTree on left and right nodes
  - 94 Binary Tree Inorder Traversal
    - Success
    - February 13
    - Notes: key here is remembering what inorder traversal means
      - more impressive to solve this without a nested dfs function and utility array
      - but going for naive first and improving it is also good
  - 104 Maximum Depth of Binary Tree
    - Success
    - February 13
    - Notes: base case returns 0, math.max on both recursive functions for left/right
      - sides of the tree
  - 109 Convert Sorted List to Binary Search Tree
    - Failure
      - watched a few videos and studied a few different leetcode solutions
      - whiteboarded the recursive solution extensively
    - February 13
    - Notes: trust your instincts...
      - find mid (good old Floyd cycle detection) keep a prev and DISCONNECT it from the list
      - check if head is == mid to avoid an infinite loop
      - trust your recursive, tree solving instincts
        - is head null? getMid; create bst root from mid.val; if head eq mid return root;
        - root.left = func(head); root.right = func(mid.next); return root;
  - 235 Lowest Common Ancestor of a Binary Search Tree
    - Success
    - February 13
    - Notes: go slow and use sound logic, this is a BST problem, so you can use that to your advantage
      - simple answer you mainly checking if the current val is higher or lower than p and q

## Linked Lists
  - 206 Reverse Linked List
    - Success
    - February 12
    - Notes: use current, previous, temp to reassign node pointers
  - 92 Reverse Linked List II
    - Failure
      - watched neetcode to study
    - February 12
    - Notes: use dummyNode to avoid edge cases, three step process
      - find left position
      - reverse from left position to right position
      - reconcile broken list using leftPrevious.next.next and leftPrevious.next
  - 141 Linked List Cycle
    - Success
    - February 12
    - Notes: fast and slow pointer (Floyd's Cycle Detection) 
      - move pointers before evaluating slow === fast
  - 142 Linked List Cycle II
    - Success
    - February 12
    - Notes: fast and slow pointer (Floyd's Cycle Detection)
      - after a cycle is determined, increment headPointer and fastPointer by one'
      - when these pointers meet, you have found the cycle starting point
  - 160 Intersection of Two Linked Lists
    - Failure
      - missed the while loop conditional
    - February 12
    - Notes: use two pointers to iterate through each list
      - when a pointer reaches the end of it's list, assign it to the other list head
      - when the pointers match, then break the loop, return either pointer
  - 234 Palidrome Linked List
    - Failure
      - compared ListNode's INSTEAD of comparing values
    - February 12
    - Notes: Three step process
      - find mid (Floyd's Cycle Detection)
      - reverse mid to end
      - compare head VALUES to mid VALUES
  - 328 Odd Even Linked List
    - Failure
      - watched a few YouTube videos and solved again
    - February 12
    - Notes: two pointers, go slow and logically assign the nodes with O(n) time complexity
  - 2095 Delete the Middle Node of a Linked List
    - Success
    - February 12
    - Notes: Use the Floyd Cycle Detection to find ONE BEFORE mid
      - remove the middle node using ONE BEFORE mid
  - 86 Partition List
    - Success
    - February 12
    - Notes: Collect values into left and right dummy Lists
      - point left list to head of right list
      - set right list tail to point to null to remove list cycle
  - 2487 Remove Nodes from Linked List
    - Failure
      - watched neetcode
    - February 12
    - Notes: Reverse the list and keep track of max
      - if value is not gte max, then remove it from list
      - when returning the list, do not forget to reverse it again
      - a reverse helper function is very helpful here!
  - 147 Insertion Sort List
    - Failure
      - read some leetcode solutions
    - Notes: use a dummy node
      - start each interation with a while loop to position prev to insert current
