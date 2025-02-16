// function groupAnagrams(str: string[]): string[][] {
//     const alpha = str.map(word => word.split('').sort().join(''))
//     const map: Map<string, (string[] | undefined)> = new Map()

//     for (let [i, v] of Object.entries(alpha)) {
//         if (map.has(v)) {
//             const collection = map.get(v)
//             collection!.push(i)
//             map.set(v, collection)
//         } else {
//             map.set(v, [i])
//         }
//     }

//     const results: string[][] = []

//     for (let [key, val] of Array.from(map)) {
//         const result: string[] = val!.map(i => str[i])
//         results.push(result)
//     }

//     return results
// }

function groupAnagrams(str: string[]): string[][] {
    const map = {}

    for (let word of str) {
        let sorted = word.split('').sort().join('')
        if (map[sorted]) {
            const collection = map[sorted]
			if (collection) {
				collection.push(word)
				map[sorted] = collection
			}
        } else {
            map[sorted] = [word]
        }
    }

    return Object.values(map)
}

