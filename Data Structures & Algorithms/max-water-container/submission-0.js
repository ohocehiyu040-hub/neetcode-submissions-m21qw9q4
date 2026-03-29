

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length - 1;
        let maxDepth = 0
        while (l < r) {
            const width = r - l
            const looser = Math.min(heights[l], heights[r]) 
            const multiply = width * looser
            maxDepth = Math.max(maxDepth, multiply);
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--
            }
        }
        return maxDepth
    }
}

// [1, 8, 6, 2, 5, 4, 8, 3, 7].