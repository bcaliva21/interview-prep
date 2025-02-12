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
