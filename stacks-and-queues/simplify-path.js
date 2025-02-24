/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = []
    let cur = ''

    path += '/'

    for (let c of path) {
        if (c === '/') {
            if (cur === '..') {
                stack.pop()
            } else if (cur != '' && cur != '.') {
                stack.push(cur)
            }
            cur = ''
        } else {
            cur += c
        }
    }

    return '/' + stack.join('/')
};


'/abc/.././def'
