class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix.length) return false; 
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        let left = 0; 
        let right = (ROWS * COLS) - 1; 

        while (left <= right) { 
            let mid = Math.floor ((left + right)/2); 
            let row = Math.floor (mid / COLS);
            let col = mid % COLS; 

            if (matrix[row][col] === target) {
                return true
            } else if (matrix[row][col] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false; 
    }
}
