class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {}; // Наш журнал частот
        let l = 0;
        let maxFreq = 0; // Рекорд популярности одной буквы в текущем окне
        let result = 0;
        for (let r = 0; r < s.length; r++) {
            count[s[r]] = (count[s[r]] || 0) + 1;
            maxFreq = Math.max(maxFreq, count[s[r]])
            while ((r - l + 1) - maxFreq > k) {
                count[s[l]]--
                l++
            }
            result = Math.max(result, r - l + 1)
        }
    return result
    }
}
