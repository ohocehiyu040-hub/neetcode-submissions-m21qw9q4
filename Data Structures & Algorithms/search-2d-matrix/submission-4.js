class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const stringMatrix = [];
        for (let el of matrix) {
            stringMatrix.push(...el);
        }
        let l = 0;
        let r = stringMatrix.length - 1;
        
        while (l <= r) {
            const mid =  Math.floor((l + r) / 2)
            
            if (stringMatrix[mid] === target) {
                return true
            }
            if (stringMatrix[mid] < target) {
                l = mid + 1 
            } else {
                r = mid - 1
            }
        }
        return false
    }
}
