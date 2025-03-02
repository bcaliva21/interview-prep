// <!-- description:start -->

// <p>Given an array of meeting time intervals <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, return <em>the minimum number of conference rooms required</em>.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>
// <pre><strong>Input:</strong> intervals = [[0,30],[5,10],[15,20]]
// <strong>Output:</strong> 2
// </pre><p><strong class="example">Example 2:</strong></p>
// <pre><strong>Input:</strong> intervals = [[7,10],[2,4]]
// <strong>Output:</strong> 1
// </pre>
// <p>&nbsp;</p>
// <p><strong>Constraints:</strong></p>

// <ul>
// 	<li><code>1 &lt;=&nbsp;intervals.length &lt;= 10<sup>4</sup></code></li>
// 	<li><code>0 &lt;= start<sub>i</sub> &lt; end<sub>i</sub> &lt;= 10<sup>6</sup></code></li>
// </ul>

// <!-- description:end -->
	//

function meetingRoomII(intervals) {
	intervals.sort((a,b) => a[0] < a[b] ? -1 : 1)
	let conflicts = 0
	for (let i = 1; i < intervals.length; i++) {
		const [_,pEnd] = intervals[i-1]
		const [start,__] = intervals[i]
		if (pEnd > start) conflicts++
	}

	return conflicts + 1
}

console.log(meetingRoomII([[0,30],[5,10],[15,20]]))
