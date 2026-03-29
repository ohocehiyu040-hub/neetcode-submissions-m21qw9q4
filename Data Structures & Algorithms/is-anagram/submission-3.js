class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        const map = new Map();
        for (let char of s) {
           
            map.set(char, (map.get(char) || 0) + 1);
        }
        for (let char of t) {
            let count = map.get(char)
            if (!count){
               return false
            }
            map.set(char, count - 1)
        }
        return true
    }
}
