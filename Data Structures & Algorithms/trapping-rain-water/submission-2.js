class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (height.length === 0) return 0
        let l = 0;
        let r = height.length - 1;
        let maxLeft = height[l];
        let maxRight = height[r];
        let totalWater = 0;
        while (l < r) {
            if (maxLeft < maxRight) {
                l++
                maxLeft = Math.max(height[l], maxLeft);
                totalWater += maxLeft - height[l]
            } else if (maxLeft >= maxRight) {
                r--
                maxRight = Math.max(height[r], maxRight);
                totalWater += maxRight - height[r]
            }
        }
        return totalWater
    }
}
