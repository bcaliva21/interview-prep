/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        // is nums[m] a peak ele?
        if ((m - 1 < 0 || nums[m] > nums[m - 1]) && (m + 1 > nums.length - 1 || nums[m] > nums[m + 1])) {
            return m
        } else if (nums[m] < nums[m + 1]) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
};
