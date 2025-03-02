// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

function wordSearch(grid, word) {
    if (word.length === 0) return false
    const ROWS = grid.length
    const COLS = grid[0].length
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === word[0]) {
                const queue = []
                for (let [r, c] of directions) {
                    if (r + i < ROWS && r + i > -1 &&
                        c + j < COLS && c + j > -1) {
                        let fragment = word.slice(1)
                        queue.push([r + i, c + j, fragment])
                    }
                }

                while (queue.length) {
                    let ql = queue.length
                    for (let k = 0; k < ql; k++) {
                        const [row, col, fragment] = queue.shift()
                        if (fragment.length === 0) return true
                        if (grid[row][col] === fragment[0]) {
                            for (let [r, c] of directions) {
                                if (r + row < ROWS && r + row > -1 &&
                                    c + col < COLS && c + col > -1) {
                                    let frag = fragment.slice(1)
                                    queue.push([r + row, c + col, frag])
                                }
                            }
                        }

                    }
                }
            }
        }
    }
    return false
}

const test = [
    ['a', 'b', 'c', 'd'],
    ['h', 'e', 'l', 't'],
    ['x', 'y', 'l', 'o'],
    ['v', 'q', 'i', 'e'],
]

console.log(wordSearch(test, 'hello'))
console.log(wordSearch(test, 'helc'))
console.log(wordSearch(test, 'held'))

// will we need to handle an empty string?
// will we need to handle an empty grid?
// are all characters guarenteed to be lowercase english characters?
// does the current cell match the first letter?
// if yes, we want to explore it's neighbors with word.slice(1) => 'ello'
// if no, we want to move forward in the grid
// if word is empty, we have found the word


