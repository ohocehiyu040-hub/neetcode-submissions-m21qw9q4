class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const collection = { 
            '}': '{',
            ']': '[',
            ')': '(',
        }
        const stack = [];
        for (let char of s) {
            if (char in collection) {
                const top = stack.pop();
                if (top !== collection[char]) return false;
            } else {
                stack.push(char)
            }
        }
        return stack.length === 0
    }
}
