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
    - Notes: fast and slow pointer strat
      - move pointers before evaluating slow === fast
