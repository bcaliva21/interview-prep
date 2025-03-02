// <p>Given an array of meeting time <code>intervals</code>&nbsp;where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, determine if a person could attend all meetings.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>
// <pre><strong>Input:</strong> intervals = [[0,30],[5,10],[15,20]]
// <strong>Output:</strong> false
// </pre><p><strong class="example">Example 2:</strong></p>
// <pre><strong>Input:</strong> intervals = [[7,10],[2,4]]
// <strong>Output:</strong> true
// </pre>
// <p>&nbsp;</p>
// <p><strong>Constraints:</strong></p>

// <ul>
// 	<li><code>0 &lt;= intervals.length &lt;= 10<sup>4</sup></code></li>
// 	<li><code>intervals[i].length == 2</code></li>
// 	<li><code>0 &lt;= start<sub>i</sub> &lt;&nbsp;end<sub>i</sub> &lt;= 10<sup>6</sup></code></li>
// </ul>

// <!-- description:end -->

function meetingRoom(intervals) {
    intervals.sort((a, b) => a[0] < b[0] ? -1 : 1)
    let ptr = 0

    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i]
        let [pStart, pEnd] = intervals[ptr]
        if (pEnd > start) return false
        if (end > pEnd) ptr = i
    }

    return true
}

// sort intervals by start time

// ptr
// intervals = [[0,30],[5,10],[15,20]]

console.log(meetingRoom([
    [7, 10],
    [2, 6],
]))
