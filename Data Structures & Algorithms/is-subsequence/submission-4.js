class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0; 
        for (let j = 0; j <= t.length - 1; j++) {
            if (s[i] === t[j]) {
                i++
            } 
        }
        return s.length === i
    }
}
