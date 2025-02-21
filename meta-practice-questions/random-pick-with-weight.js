class Solution {
	constructor(w) {
		this.sum = 0
		this.weight = []
		for (let i = 0; i < w.length; i++) {
			this.sum += w[i]
			this.weight.push(this.sum)
		}
	}

	pickIndex() {
		const i = Math.floor(Math.random() * this.sum)
		let l = 0
		let r = this.weight.length - 1
		while (l <= r) {
			let m = Math.floor((l+r)/2)
			if (i < this.weight[m]) {
				r = m - 1
			} else {
				l = m + 1
			}
		}

		return l
	}
}
