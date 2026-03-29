class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const operations = {
            '+' : (a, b) => b + a,
            '-' : (a, b) => b - a,
            '*' : (a, b) => b * a,
            '/' : (a, b) => Math.trunc(b / a),
        } 
        for (let val of tokens) {
            if (!operations[val]) {
                stack.push(Number(val));
            } else {
                stack.push(operations[val](stack.pop(), stack.pop())) 
            }
        }
        return stack[0]
    }
}
