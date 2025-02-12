# interview-prep

## Linked Lists
  - 206. Reverse Linked List
    - Success
    - February 12
    - Notes: use current, previous, temp to reassign node pointers
  - 92. Reverse Linked List II
    - Failure
      - watched neetcode to study
    - February 12
    - Notes: use dummyNode to avoid edge cases, three step process
      - find left position
      - reverse from left position to right position
      - reconcile broken list using leftPrevious.next.next and leftPrevious.next
  - 141. Linked List Cycle
    - Success
    - February 12
    - Notes: fast and slow pointer (Floyd's Cycle Detection) 
      - move pointers before evaluating slow === fast
  - 142. Linked List Cycle II
    - Success
    - February 12
    - Notes: fast and slow pointer (Floyd's Cycle Detection)
      - after a cycle is determined, increment headPointer and fastPointer by one'
      - when these pointers meet, you have found the cycle starting point
  - 160. Intersection of Two Linked Lists
    - Failure
      - missed the while loop conditional
    - February 12
    - Notes: use two pointers to iterate through each list
      - when a pointer reaches the end of it's list, assign it to the other list head
      - when the pointers match, then break the loop, return either pointer
  - 234. Palidrome Linked List
    - Failure
      - compared ListNode's INSTEAD of comparing values
    - February 142
    - Notes: Three step process
      - find mid (Floyd's Cycle Detection)
      - reverse mid to end
      - compare head VALUES to mid VALUES
