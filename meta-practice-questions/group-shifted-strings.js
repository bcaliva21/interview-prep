// ## Description

// <!-- description:start -->

// <p>Perform the following shift operations on a string:</p>

// <ul>
// 	<li><strong>Right shift</strong>: Replace every letter with the <strong>successive</strong> letter of the English alphabet, where &#39;z&#39; is replaced by &#39;a&#39;. For example, <code>&quot;abc&quot;</code> can be right-shifted to <code>&quot;bcd&quot; </code>or <code>&quot;xyz&quot;</code> can be right-shifted to <code>&quot;yza&quot;</code>.</li>
// 	<li><strong>Left shift</strong>: Replace every letter with the <strong>preceding</strong> letter of the English alphabet, where &#39;a&#39; is replaced by &#39;z&#39;. For example, <code>&quot;bcd&quot;</code> can be left-shifted to <code>&quot;abc&quot;<font face="Times New Roman"> or </font></code><code>&quot;yza&quot;</code> can be left-shifted to <code>&quot;xyz&quot;</code>.</li>
// </ul>

// <p>We can keep shifting the string in both directions to form an <strong>endless</strong> <strong>shifting sequence</strong>.</p>

// <ul>
// 	<li>For example, shift <code>&quot;abc&quot;</code> to form the sequence: <code>... &lt;-&gt; &quot;abc&quot; &lt;-&gt; &quot;bcd&quot; &lt;-&gt; ... &lt;-&gt; &quot;xyz&quot; &lt;-&gt; &quot;yza&quot; &lt;-&gt; ...</code>.<code> &lt;-&gt; &quot;zab&quot; &lt;-&gt; &quot;abc&quot; &lt;-&gt; ...</code></li>
// </ul>

// <p>You are given an array of strings <code>strings</code>, group together all <code>strings[i]</code> that belong to the same shifting sequence. You may return the answer in <strong>any order</strong>.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>

// <div class="example-block">
// <p><strong>Input:</strong> <span class="example-io">strings = [&quot;abc&quot;,&quot;bcd&quot;,&quot;acef&quot;,&quot;xyz&quot;,&quot;az&quot;,&quot;ba&quot;,&quot;a&quot;,&quot;z&quot;]</span></p>

// <p><strong>Output:</strong> <span class="example-io">[[&quot;acef&quot;],[&quot;a&quot;,&quot;z&quot;],[&quot;abc&quot;,&quot;bcd&quot;,&quot;xyz&quot;],[&quot;az&quot;,&quot;ba&quot;]]</span></p>
// </div>

// <p><strong class="example">Example 2:</strong></p>

// <div class="example-block">
// <p><strong>Input:</strong> <span class="example-io">strings = [&quot;a&quot;]</span></p>

// <p><strong>Output:</strong> <span class="example-io">[[&quot;a&quot;]]</span></p>
// </div>

// <p>&nbsp;</p>
// <p><strong>Constraints:</strong></p>

// <ul>
// 	<li><code>1 &lt;= strings.length &lt;= 200</code></li>
// 	<li><code>1 &lt;= strings[i].length &lt;= 50</code></li>
// 	<li><code>strings[i]</code> consists of lowercase English letters.</li>
// </ul>

// <!-- description:end -->

// strings = ['abc', 'bcd', 'acef', 'xyz','az','ba','a','z']
//             '11',  '11',  '221',  '11', '25' '25'
// get the diff between all characters of each strings[i]
// if strings[i].length === 1 we can group all these together

// do we need to handle strings being empty?
// will all elements of strings be valid lowercase alpha characters?

function groupShiftedStrings(strings) {
    const map = {
        '0': []
    }
    const ans = []
    for (let s of strings) {
        let key = ''
        if (s.length === 1) {
            key = '0'
            map[key].push(s)
            continue
        }
        for (let i = 1; i < s.length; i++) {
            let diff = s[i].charCodeAt(0) - s[i - 1].charCodeAt(0)
            diff = diff < 0 ? diff + 26 : diff
            key += diff + ','
        }
        if (map[key]) {
            map[key].push(s)
        } else {
            map[key] = [s]
        }
    }

    for (let arr of Object.values(map)) {
        ans.push(arr)
    }

    return ans
}

console.log(groupShiftedStrings(['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z', 'ca', 'bz', 'ay']))
