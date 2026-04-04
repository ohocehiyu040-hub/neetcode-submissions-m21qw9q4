class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return '';
        let countT = {}
        for (let char of t) {
            countT[char] = (countT[char] || 0) + 1;
        }
        const need = Object.keys(countT).length;
        
        let windowCount = {};
        let have = 0;
        let l = 0

        let res = [-1, 1];
        let resLen = Infinity;
       
        for (let r = 0; r < s.length; r++) {
           let currentChar = s[r];
           windowCount[currentChar] = (windowCount[currentChar] || 0) + 1;
           if (countT[currentChar] && windowCount[currentChar] === countT[currentChar]) {
                have++
           };
           while (have === need) {
                if ((r - l + 1) < resLen) {
                    resLen = r - l + 1;
                    res = [l, r]
                }
                let charOut = s[l];
                windowCount[charOut]--;
                if (countT[charOut] && windowCount[charOut] < countT[charOut]) {
                    have--;
                }
                l++
           }
        }
        return resLen === Infinity ? '' : s.substring(res[0], res[1] + 1)
    }
}
