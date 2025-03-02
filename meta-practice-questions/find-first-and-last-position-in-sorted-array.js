// <p>Given an array of integers <code>nums</code> sorted in non-decreasing order, find the starting and ending position of a given <code>target</code> value.</p>

// <p>If <code>target</code> is not found in the array, return <code>[-1, -1]</code>.</p>

// <p>You must&nbsp;write an algorithm with&nbsp;<code>O(log n)</code> runtime complexity.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>
// <pre><strong>Input:</strong> nums = [5,7,7,8,8,10], target = 8
// <strong>Output:</strong> [3,4]
// </pre><p><strong class="example">Example 2:</strong></p>
// <pre><strong>Input:</strong> nums = [5,7,7,8,8,10], target = 6
// <strong>Output:</strong> [-1,-1]
// </pre><p><strong class="example">Example 3:</strong></p>
// <pre><strong>Input:</strong> nums = [], target = 0
// <strong>Output:</strong> [-1,-1]
// </pre>
// <p>&nbsp;</p>
// <p><strong>Constraints:</strong></p>

// <ul>
// 	<li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
// 	<li><code>-10<sup>9</sup>&nbsp;&lt;= nums[i]&nbsp;&lt;= 10<sup>9</sup></code></li>
// 	<li><code>nums</code> is a non-decreasing array.</li>
// 	<li><code>-10<sup>9</sup>&nbsp;&lt;= target&nbsp;&lt;= 10<sup>9</sup></code></li>
// </ul>

// <!-- description:end -->


function firstAndLast(nums, target) {

    function bSearch(leftBias) {
        let l = 0,
            r = nums.length - 1,
            i = -1
        while (l <= r) {
            let m = Math.floor((l + r) / 2)
            if (nums[m] > target) {
                r = m - 1
            } else if (nums[m] < target) {
                l = m + 1
            } else {
                i = m
                if (leftBias) {
                    r = m - 1
                } else {
                    l = m + 1
                }
            }
        }
        return i
    }

    return [bSearch(true), bSearch(false)]
}

const nums = [5, 7, 7, 8, 8, 10]
const t = 6
console.log(firstAndLast(nums, t))
