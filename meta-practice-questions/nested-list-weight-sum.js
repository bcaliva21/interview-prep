function nestedWeightSum(nums, depth = 1) {
  let total = 0

  for (let numOrArray of nums) {
    if (Number.isInteger(numOrArray)) {
      total += (numOrArray * depth)
    } else {
      total += nestedWeightSum(numOrArray,depth+1)
    }
  }

  return total
}

console.log(nestedWeightSum([1,[4,[6]]])) // 27
console.log(nestedWeightSum([[1,1],2,[1,1]])) // 10
