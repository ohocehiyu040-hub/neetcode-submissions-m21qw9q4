class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        const collection = new Set();
        let record = 0;

        while (r < s.length) {
            if (collection.has(s[r])) {
                collection.delete(s[l])
                l++ 
            } else {
               collection.add(s[r]);
               record = Math.max (record, collection.size);
               r++
            }
        }
        return record
    }
}
