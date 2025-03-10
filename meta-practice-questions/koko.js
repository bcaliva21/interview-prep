// function minEatingSpeed(piles: number[], h: number): number {
//     let [l, r] = [1, Math.max(...piles)];
//     while (l < r) {
//         const mid = (l + r) >> 1;
//         const s = piles.map(x => Math.ceil(x / mid)).reduce((a, b) => a + b);
//         if (s <= h) {
//             r = mid;
//         } else {
//             l = mid + 1;
//         }
//     }
//     return l;
// }

function minEatingSpeed(piles, h) {
    let l = 0
    let r = Math.max(...piles)
    while (l < r) {
        const m = Math.ceil((l + r) / 2)
        const s = piles.map(x => Math.ceil(x / m)).reduce((a, b) => a + b, 0)
        if (s <= h) {
            r = m
        } else {
            l = m + 1
        }
    }

    return l
}
