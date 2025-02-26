function oceanView(heights) {
  let max = -1
  let ans = []

  for (let i = heights.length - 1; i > -1; i--) {
    let curHeight = heights[i]
    if (curHeight > max) {
      ans.unshift(i)
      max = curHeight
    }
  }

  return ans
} 

console.log(oceanView([4,2,3,1]))
