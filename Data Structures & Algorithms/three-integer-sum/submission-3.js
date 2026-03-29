class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a,b) => a - b);
        const collection = []
        for (let i = 0; i < sorted.length; i++) {
            let l = i + 1
            let r = sorted.length - 1;
            const currentTarget = sorted[i];
            if (i > 0 && currentTarget === sorted[i - 1]) {
                continue
            }
            while (l < r) {
                const sum = sorted[l] + sorted[r] + currentTarget
                if (sum === 0) {
                    collection.push([sorted[l], sorted[r], currentTarget]);
                    l++
                    r--
                    while (l < r && sorted[l] === sorted[l - 1]) {
                        l++
                    }
                } else if ( sum < 0) {
                    l++ 
                } else {
                    r--
                }
            }
        }
        return collection
    }
}
// Input: nums = [-1,0,1,2,-1,-4]