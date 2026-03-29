Input: board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let seen = new Set();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let val = board[r][c];

                if (val !== '.') {
                    const str = `row-${r}-${val}`;
                    const col = `col-${c}-${val}`
                    const box = `box-${Math.floor(r/3)}-${Math.floor(c/3)}-${val}`;
                    if (seen.has(str) || seen.has(col) || seen.has(box)){ 
                        return false;
                    } else {
                        seen.add(str)
                        seen.add(col)
                        seen.add(box)
                    }
                }
            }
        }
        return true  
    }
}
