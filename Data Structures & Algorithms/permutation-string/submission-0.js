class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let windowCount = {};
        let s1Collect = {}
        function isMatch (map1, map2) {
            for (let char in map1) {
                if (map1[char] !== map2[char]) return false;
            }
            for (let char in map2) {
                if (map2[char] > 0 && map1[char] !== map2[char]) return false
            }
            return true
        }
        for (let char of s1) {
            s1Collect[char] = (s1Collect[char] || 0) + 1;
        }
        for (let r = 0; r < s2.length; r++) {
            let charIn = s2[r];
            windowCount[charIn] = (windowCount[charIn] || 0) + 1;
            if (r >= s1.length) {
                let charOut = s2[r - s1.length]
                windowCount[charOut]--;
            }
            if (r >= s1.length - 1) {
                if (isMatch(s1Collect, windowCount)) return true
            }
        }
        return false
    }
}
