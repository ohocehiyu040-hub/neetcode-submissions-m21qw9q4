class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for (let i = 0; i < nums.length; i++) {
            const number = target - nums[i]
            if (map.has(number)){
               return [map.get(number), i]
            }
            map.set(nums[i], i)
        }
        return false
    }
}
