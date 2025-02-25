function movingAverages(nums, size) {
    const ans = []
    let sum = 0
    let l = 0
    let r = size - 1

    for (let i = l; i <= r; i++) {
        sum += nums[i]
    }

    ans.push(sum / size)
    let prev = l++
    r++

    while (r < nums.length) {
        sum -= nums[prev]
        sum += nums[r++]
        prev = l++
        ans.push(sum / size)
    }

    return ans
}

console.log(movingAverages([5, 3, 7, 20], 3))
