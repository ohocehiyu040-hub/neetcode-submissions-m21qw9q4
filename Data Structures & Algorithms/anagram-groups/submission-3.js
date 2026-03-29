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
                const value = stack.get(sorted) || []
                stack.set(sorted, [...value, word])
            } else {
                stack.set (sorted, [word]);
            }
            
        }
        return [...stack.values()]
    }
}
