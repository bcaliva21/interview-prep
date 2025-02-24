class SparseVector {
    constructor(nums) {
        this.d = []

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                this.d.push([i, nums[i]])
            }
        }
    }

    dotProduct(vec) {
        let vecPtr1 = 0
        let vecPtr2 = 0
        let product = 0

        while (vecPtr1 < this.d.length && vecPtr2 < vec.d.length) {
            let [thisVecIdx, thisVecVal] = this.d[vecPtr1]
            let [vecIdx, vecVal] = vec.d[vecPtr2]

            if (thisVecIdx === vecIdx) {
                product += (thisVecVal * vecVal)
            }

            if (thisVecIdx === vecIdx) {
                vecPtr1++
                vecPtr2++
            } else if (thisVecIdx > vecIdx) {
                vecPtr2++
            } else {
                vecPtr1++
            }
        }

        return product
    }
}

const vec1 = new SparseVector([1, 0, 0, 2, 3])
const vec2 = new SparseVector([0, 3, 0, 4, 0])
const vec3 = new SparseVector([0, 1, 0, 0, 0])
const vec4 = new SparseVector([0, 0, 0, 0, 2])

// console.log(vec1.dotProduct(vec2))
console.log(vec3.dotProduct(vec4))

// Input: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
//
// this.vec = [[0,1],[3,2],[4,3]]
// vec = [[1,3],[3,4]]
