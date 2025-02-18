class MinStack {
	constructor() {
		this.stack = []
		this.minStack = []
	}

	push(val) {
		this.stack.push(val)
		let min = this.minStack[this.minStack.length - 1]
		if (min != undefined && min < val) {
			this.minStack.push(min)
		} else {
			this.minStack.push(val)
		}
	}

	pop() {
		this.stack.pop()
		this.minStack.pop()
	}

	top() {
		const val = this.stack[this.stack.length - 1]
		return val != undefined ? val : -1
	}

	getMin() {
		const min = this.minStack[this.minStack.length - 1]
		return min != undefined ? min : -1
	}
}
