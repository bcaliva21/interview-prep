function findMin(nums) {
    let l = 0
    let r = nums.length - i

    while (l < r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] > nums[r]) {
            l = m + 1
        } else {
            r = m
        }
    }

    return nums[l]
}
