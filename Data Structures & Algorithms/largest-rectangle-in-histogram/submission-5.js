class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        heights.push(0)
        const stack = [];
        let maxArea = 0
        for (let i = 0; i < heights.length; i++ ){
            let start = i;
            while (stack.length > 0 && stack[stack.length - 1].h > heights[i]) {
                const popped = stack.pop();
                maxArea = Math.max (maxArea, popped.h * (i - popped.index))
                start = popped.index
            }
            stack.push({index: start, h: heights[i]})
    
        }
        return maxArea
    }
}
