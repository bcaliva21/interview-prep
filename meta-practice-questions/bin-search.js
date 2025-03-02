function search(nums, target) {
    let l = 0,
        r = nums.length - 1
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] > target) {
            r = m - 1
        } else if (nums[m] < target) {
            l = m + 1
        } else {
            return m
        }
    }

    return -1
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 8))
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 1))
