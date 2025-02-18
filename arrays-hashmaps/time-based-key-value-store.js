class TimeMap {
	constructor() {
		this.map = {}
	}

	set(key, value, timestamp) {
		let container = this.map[key]

		if (!container) {
			container = this.map[key] = []
		}
		container.push({value, timestamp})
	}

	get(key,timestamp) {
		const container = this.map[key]
		if (!container) return ''

		for (let i = container.length-1; i > -1; i--) {
			const obj = container[i]
			if (timestamp >= obj.timestamp) {
				return obj.value
			}
		}

		return ''
	}
}
