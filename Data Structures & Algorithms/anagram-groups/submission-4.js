class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const stack = new Map();
        for (let word of strs) {
            const sorted = word.split('').sort().join('');
            if (stack.has(sorted)){
                stack.get(sorted).push(word)
            } else {
                stack.set (sorted, [word]);
            }
        }
        return [...stack.values()]
    }
}
