class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0
        const search = new Set([...nums]);
        for (let num of search) {
            if (!search.has(num - 1)) {
                let currentNum = num;
                let currentCounter = 1
                
                while (search.has(currentNum + 1)) {
                currentNum++
                currentCounter++
            }
            longest = Math.max(longest, currentCounter);
        }
    }
    return longest 
    }
}
