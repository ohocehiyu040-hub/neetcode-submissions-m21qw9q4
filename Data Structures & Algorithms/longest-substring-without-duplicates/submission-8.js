class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0; 
        let record = 0
        const charSet = new Set();
        while (r < s.length) {
            while(charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++
            }
            charSet.add(s[r]);
            record = Math.max(record, r - l + 1);
            r++
        }
        return record; 
    }
}
