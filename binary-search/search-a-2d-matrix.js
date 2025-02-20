function searchMatrix(matrix,target) {
	const ROW_LEN = matrix.length
	const COL_LEN = matrix[0].length

	let bot = 0
	let top = ROW_LEN - 1

	while (bot < top) {
		let mid = Math.floor((top+bot)/2)
		if (matrix[mid][COL_LEN-1] < target) {
			bot = mid+1
		} else if (matrix[mid][0] > target) {
			top = mid-1
		} else {
			break
		}
	}
	if (!(bot <= top)) {
		return false
	}

	const row = Math.floor((top+bot)/2)

	return binarySearch(matrix[row], target)
}

function binarySearch(arr, target) {
	let beg = 0
	let end = arr.length - 1
	while (end > beg) {
		let mid = Math.floor((beg+end)/2)
		if (arr[mid] > target) {
			end = mid - 1
		} else if (arr[mid] < target) {
			beg = mid + 1
		} else {
			return true
		}
	}

	return arr[end] !== target ? false : true
}
