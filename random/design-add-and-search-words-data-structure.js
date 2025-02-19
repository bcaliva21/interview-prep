function wordDictionary() {
	this.map = {}
}

WordDictionary.prototype.addWord = function(word) {
	let node = this.map

	for (let char of word) {
		if (!node[char]) {
			const newNode = new WordDictionary()
			node[char] = newNode
		}

		node = node[char]
	}

	node['isWord'] = true
}

WordDictionary.prototype.search = function(word, node = this.map) {
	if (word.length === 0 && node['isWord']) return true
	const char = word[0]
	const nextWord = word.slice(1)

	if (char === '.') {
		for (let key in node) {
			if (this.search(nextWord, node[key])) return true
		}
	}
	if (!node[char]) return false

	return this.search(nextWord, node[char])
}

