// <!-- description:start -->

// <p>Koko loves to eat bananas. There are <code>n</code> piles of bananas, the <code>i<sup>th</sup></code> pile has <code>piles[i]</code> bananas. The guards have gone and will come back in <code>h</code> hours.</p>

// <p>Koko can decide her bananas-per-hour eating speed of <code>k</code>. Each hour, she chooses some pile of bananas and eats <code>k</code> bananas from that pile. If the pile has less than <code>k</code> bananas, she eats all of them instead and will not eat any more bananas during this hour.</p>

// <p>Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.</p>

// <p>Return <em>the minimum integer</em> <code>k</code> <em>such that she can eat all the bananas within</em> <code>h</code> <em>hours</em>.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>

// <pre>
// <strong>Input:</strong> piles = [3,6,7,11], h = 8
// <strong>Output:</strong> 4
// </pre>

// <p><strong class="example">Example 2:</strong></p>

// <pre>
// <strong>Input:</strong> piles = [30,11,23,4,20], h = 5
// <strong>Output:</strong> 30
// </pre>

// <p><strong class="example">Example 3:</strong></p>

// <pre>
// <strong>Input:</strong> piles = [30,11,23,4,20], h = 6
// <strong>Output:</strong> 23
// </pre>

// <p>&nbsp;</p>
// <p><strong>Constraints:</strong></p>

// <ul>
// 	<li><code>1 &lt;= piles.length &lt;= 10<sup>4</sup></code></li>
// 	<li><code>piles.length &lt;= h &lt;= 10<sup>9</sup></code></li>
// 	<li><code>1 &lt;= piles[i] &lt;= 10<sup>9</sup></code></li>
// </ul>

// <!-- description:end -->


function bananas(piles, k) {
    let l = 1,
        r = Math.max(...piles)
    let perHour = Math.max(...piles)
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        let hours = piles.map(x => Math.ceil(x / m)).reduce((acc, cv) => acc += cv, 0)
        if (hours > k) {
            l = m + 1
        } else if (hours <= k) {
            r = m - 1
            perHour = Math.min(perHour, m)
        }
    }

    return perHour
}
const piles = [30, 11, 23, 4, 20]
const h = 6
console.log(bananas(piles, h))
console.log(bananas([3, 6, 7, 11], 8))
