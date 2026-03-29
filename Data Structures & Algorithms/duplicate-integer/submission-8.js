class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     let stash = new Set()
    //     for (let i = 0; i < nums.length; i++) {
    //         if (stash.has(nums[i])) {
    //             return true
    //         }
    //         stash.add(nums[i])
    //     }
    //     return false
    // }
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length
    }
}

//