// <p>Given a string <code>s</code> which represents an expression, <em>evaluate this expression and return its value</em>.&nbsp;</p>

// <p>The integer division should truncate toward zero.</p>

// <p>You may assume that the given expression is always valid. All intermediate results will be in the range of <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>.</p>

// <p><strong>Note:</strong> You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as <code>eval()</code>.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>
// <pre><strong>Input:</strong> s = "3+2*2"
// <strong>Output:</strong> 7
// </pre><p><strong class="example">Example 2:</strong></p>
// <pre><strong>Input:</strong> s = " 3/2 "
// <strong>Output:</strong> 1
// </pre><p><strong class="example">Example 3:</strong></p>
// <pre><strong>Input:</strong> s = " 3+5 / 2 "
// <strong>Output:</strong> 5
// </pre>
// <p>&nbsp;</p>
// <p><strong>Constraints:</strong></p>

// <ul>
// 	<li><code>1 &lt;= s.length &lt;= 3 * 10<sup>5</sup></code></li>
// 	<li><code>s</code> consists of integers and operators <code>(&#39;+&#39;, &#39;-&#39;, &#39;*&#39;, &#39;/&#39;)</code> separated by some number of spaces.</li>
// 	<li><code>s</code> represents <strong>a valid expression</strong>.</li>
// 	<li>All the integers in the expression are non-negative integers in the range <code>[0, 2<sup>31</sup> - 1]</code>.</li>
// 	<li>The answer is <strong>guaranteed</strong> to fit in a <strong>32-bit integer</strong>.</li>
// </ul>

// <!-- description:end -->


function calculate(s) {
    let curOp = '+'
    let total = 0,
        prev = 0,
        cur = 0,
        i = 0

    while (i < s.length) {
        if (Number.isInteger(parseInt(s[i]))) {
            while (i < s.length && Number.isInteger(parseInt(s[i]))) {
                cur = (cur * 10) + parseInt(s[i])
                i++
            }
        }
        if (s[i] !== ' ') {
            if (curOp === '*') {
                total -= prev
                total += prev * cur
                prev = cur
            } else if (curOp === '/') {
                total -= prev
                total += parseInt(prev / cur)
                prev = parseInt(prev / cur)
            } else if (curOp === '-') {
                total -= cur
                prev = -cur
            } else if (curOp === '+') {
                total += cur
                prev = cur
            }
            curOp = s[i]
            cur = 0
        }
        i++
    }
    return total
}

console.log(calculate('3+2*2'))
