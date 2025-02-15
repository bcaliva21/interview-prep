class MyQueue {
	constructor(
		private stack1: number[] = [],
		private stack2: number[] = []
	) {}

	push(val: number): void {
		if (typeof val !== 'number') {
			// raise some sort of error
			return
		}
		this.stack1.push(val)
		return
	}

	pop(): number {
		while (this.stack1.length > 0) {
			this.stack2.push(this.stack1.pop())
		}
		const target = this.stack2.pop()
		while (this.stack2.length > 0) {
			this.stack1.push(this.stack2.pop())
		}

		return target
	}
	peek(): number {
		while (this.stack1.length > 0) {
			this.stack2.push(this.stack1.pop())
		}
		const peekaboo = this.stack2[this.stack2.length-1]
		while (this.stack2.length > 0) {
			this.stack1.push(this.stack2.pop())
		}

		return peekaboo
	}
	empty(): boolean {
		return this.stack1.length === 0
	}
}
