class Node {
	constructor(
		public val: number = 0,
		public next: Node | null = null,
		public prev: Node | null = null
	) {}
}

class LRUCache {
	private cache = new Map<number, [number, Node]>()
	private head: Node | null = null
	private tail: Node | null = null

	constructor(public capacity: number) {}

	get(key: number): number {
		const entry = this.cache.get(key)
		if (entry) {
			this.bringToTop(entry[1])
			return entry[0]
		} else {
			return -1
		}
	}

	put(key: number, value: number): void {
		const entry = this.cache.get(key)
		if (entry) {
			entry[0] = value
			this.bringToTop(entry[1])
		} else {
			const node = this.append(key)
			this.cache.set(key, [value, node])
			this.evict()
		}
	}

	private append(value: number): Node {
		const newNode = new Node(value)
		if (this.head) {
			this.head.prev = newNode
			newNode.next = this.head
			this.head = newNode
		} else {
			this.head = this.tail = newNode
		}

		return newNode
	}

	private bringToTop(node: Node): void {
		if (node === this.head) return
		this.removeNode(node)
		this.append(node)
	}
	private evict(): void {
		if (this.cache.size > this.capacity && this.tail) {
			const lruNode = this.tail
			this.removeNode(lruNode)
			this.cache.delete(lruNode.val)
		}
	}
	private removeNode(node: Node): void {
		if (node.prev) node.prev.next = node.next
		if (node.next) node.next.prev = node.prev
		if (this.head === node) this.head = node.next
		if (this.tail === node) this.tail = node.prev
		node.prev = node.next = null
	}
}
