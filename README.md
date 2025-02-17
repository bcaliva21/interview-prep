# interview-prep

## Backtracking
  - 78 Subsets
    - Failure
    - February 15
    - Notes: remember to slice() slates to create new arrays to point to different places in memory
  - 39 Combination Sum
    - Failure
    - February 15
    - Notes: loop through candidates for each backtrack call
      - space and time complexity are starting to get difficult...
      - time complexity O(2^n) Each candidate can be included or excluded, leading to an exponential number of combinations
      - space complexity O(target/min(candidates)): The recursion depth depends on how many times the smallest candidate fits
      - into the target
  - 17 Letter Combinations of a Phone Number
    - Success
    - February 15
    - Notes: straightforward backtracking
      - time complexity O(4^n) where n is the length of digits
      - space complexity 
  - 46 Permutations
    - Failure
      - watched neetcode/ ran through code execution multiple times
    - February 16
    - Notes: break the problem into subproblems
      - idenfity subsets VS permutations while reading the prompt
      - this ^ should cue you in on how to structure your talking/coding
  - 47 Permutations II
    - Success
    - February 16
    - Notes: know how to quickly and easily compare arrays to ensure we don't have duplicate arrays in our return array
      - almost verbatim the same as permutations just make sure to check for duplicates 
      - JSON.stringify is a quick and dirty way to compare arrays so we do not need to add extra loops and difficulty

## Random
  - 916 Word Subsets
    - Success... but it took me 25ish minutes
    - February 15
    - Notes: no idea how to complete this faster except by talking as fast as humanly understandable
      - talk FAST
      - when stepping through code, go FAST
      - this is straight forward, it's just long and you can fall into a few traps
      - take only the max number of characters for the words2 array, it's not additive
      - use a flag to keep track of valid/invalid words
      - when using javascritp maps you can easily iterate by doing let [key,val] of Array.from(Map)
  - 49 Group Anagrams
    - Success
    - February 16
    - Notes: Solved it quickly, but I researched a cleaner solution from neetcode.io
  - 36 Valid Sudoku
    - Failure
      - watched some neetcode and solved it np after hearing his logic
    - February 16
    - Notes: Make a meta graph to track the box values is smart
      - using arrays of objects to store all the information is the way to go
      - doing this results in a time and space complexity of just O(9^2)
  - 128 Longest Consecutive Sequence
    - Failure
      - read a leetcode explanation and worked out the code for myself 
    - February 16
    - Notes: Save time by only investigating a sequence if it is the start of the sequence

## Stacks & Queues
  - hackerrank: Balanced Brackets
    - Success
    - February 15
    - Notes: remember to check if the stack is empty!!!
  - 232 Implement Queue using Stacks
    - Success
    - February 15
    - Notes: Save all values into stack1
      - when we need a value, pop all elements from stack1 and push into stack2
      - then we can pop the final value from stack2
      - save that value
      - add all values back into stack1
      - return the saved value
  - 739 Daily Temperatures
    - Success... kind of.  Very naive solutions, I studied some better ones afterwards
    - February 16
    - Notes: use a stack, not a naive O(n^2) time complexity solution
      - save indicies in the stack
      - always check the last stack item compared to the current index

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
  - 513 Find Bottom Left Tree Value
    - Success
    - February 13
    - Notes: BFS question
      - remember bfs: while(queue.length) {levelLength=queue.length;forLoop(let i=0;i<levelLength;i++){pop.and.process.nodes}}
      - save the bottomLeft of each level of bfs
      - there is an optimization here, but I didn't get to it in my 15 minutes time limit this practice session
  - 108 Convert Sorted Array to Binary Search Tree
    - Failure
      - had a bug when performing the divide and conquer on the right side of the array
    - February 14
    - Notes: Be extra careful with divide and conquer when slicing arrays
  - 515 Largest Value in Each Tree Row
    - Success
    - February 14
    - Notes: BFS - be smart about where you define variables with the while/for loop
  - 538 Convert BST to Greater Tree
    - Failure
      - watched neetcode's solution
    - February 14
    - Notes: Use a global variable in situations where the current root depend upon it's children for something
      - don't get fancy passing extra variables to dfs funcs unless it's absolutely necessary, it gets messy fast
      - have a global currentSum variable
      - traverse the tree with dfs
      - process the nodes in reverse inorder (right,root,left)
  - 988 Smallest String Starting From Leaf
    - Failure
      - watched neetcode's solution
      - studied a few leetcode solutions
    - February 14
    - Notes: THIS ONE IS TOUGH 
      - first off: String.fromCharCode(0 + 97) = 'a' remember fromCharCode and 97 to get alpha values from 0 - 25 
      - the trick here is TWO global variables
      - typical dfs, if you are at a leaf node, then check if your register is less than your resString
      - remember to clean your register with register = register.slice(1) to avoid duplicates
  - 98 Validate Binary Search Tree
    - Failure
      - just took to long
    - February 15
    - Notes: don't over simplify this solution
      - make sure you are passing down min/max to verify that all nodes adhere to these values on their particular
      - side of the tree

## Meta Practice Questions
  - Designer PDF Viewer
    - Success
    - February 13
    - Notes: Questions surely won't be this easy
  - Left Rotation
    - Success
    - February 13
    - Notes: Man... and I thought the PDF viewer question was easy xD
  - Icecream Parlour
    - Failure
    - February 15
    - Notes: Did not read the question carefully, so I made stupid mistakes (they expected 1 based indicies)
      - I truly hope the questions are not THIS contrived...
      - lessons to take away, read slow and carefully
      - ask lots of clarifying questions

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
