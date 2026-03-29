class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const stack = new Map(); 
        for (let num of nums) {
            stack.set(num, (stack.get(num) || 0) + 1)
        }
        return Array.from(stack.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(pair => pair[0])
    }
}
