// <!-- description:start -->

// <p>Given an integer array <code>nums</code>, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is equal to the product of all the elements of</em> <code>nums</code> <em>except</em> <code>nums[i]</code>.</p>

// <p>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</p>

// <p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time and without using the division operation.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>
// <pre><strong>Input:</strong> nums = [1,2,3,4]
// <strong>Output:</strong> [24,12,8,6]
// </pre><p><strong class="example">Example 2:</strong></p>
// <pre><strong>Input:</strong> nums = [-1,1,0,-3,3]
// <strong>Output:</strong> [0,0,9,0,0]
// </pre>
// <p>&nbsp;</p>


function productExceptSelf(nums) {
    const result = []
    let scratch = 1
    for (let i = 0; i < nums.length; i++) {
        result[i] = scratch
        scratch *= nums[i]
    }
    scratch = 1
    for (let i = nums.length - 1; i > -1; i--) {
        result[i] = scratch * result[i]
        scratch *= nums[i]
    }

    return result
}

console.log(productExceptSelf([1, 2, 3, 4]))

// [1,2,3,4]
// prefix [1 ,1 ,2,6]
// postfix[24,12,4,1]
// answer [24,12,8,6]

// Time  O(2n) where n is the length of nums
// Space O(3n) where n is the length of nums

// on our first iteration
// move forward through the array
// scratch is placed in cur idx
// scratch is updated with curVal * scratch

// reassign scratch to 1
// second iteration
// move backwards through the array (right to left)
// place scratch * answer[i] in array
// update scratch to curVal * scratch
// [1,2,3,4]
// [24,12,8,6]
// scratch=24
