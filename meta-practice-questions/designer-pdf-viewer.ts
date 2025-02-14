function designerPdfViewer(h: number[], word: string): number {
    const alphabetMap: Map<string, number> = new Map()
    const alphabet = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    for (let i = 0; i < h.length; i++) {
        alphabetMap.set(alphabet[i], h[i])
    }

    const wordHeights: number[] = []

    for (let char of word) {
        wordHeights.push(alphabetMap.get(char))
    }

    const max = Math.max(...wordHeights)

    return max * word.length
}

