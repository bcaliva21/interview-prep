class Trie {
	trie
	constructor() {
		this.tire = {}
		this.trie['isWord'] = false
	}

	insert(word) {
		let node = this.trie

		for (let char of word) {
			if (!node[char]) {
				node[char] = new Trie()
			}
			node = node[char]
		}

		node['isWord'] = true
	}

	search(word) {
		let node = this.trie

		for (let char of word) {
			if (!node[char]) {
				return false
			}
			node = node[char]
		}

		return node.isWord ? true : false
	}

	startsWith(prefix) {
		let node = this.trie

		for (let char of prefix) {
			if (!node[char]) {
				return false
			}
			node = node[char]
		}

		return true
	}
}


