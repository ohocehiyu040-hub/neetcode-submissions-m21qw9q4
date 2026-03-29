// Если задана строка s, вернуть значение, true если она является палиндромом , 
// в противном случае вернуть значение, равное нулю false.

// Палиндром — это строка, которая читается одинаково как в прямом, так и в обратном порядке. 
// Он также нечувствителен к регистру и игнорирует все небуквенно-цифровые символы.

// Примечание: Буквенно-цифровые символы состоят из букв (A-Z, a-z)и цифр (0-9).



class Solution {
/**
* @param {string} s
* @return {boolean}
*/
    isPalindrome (s) {
        const l = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        let left = 0;
        let right = l.length - 1;
        while (left < right) {
            if (l[left] === l[right]) {
                left++ 
                right--
            } else {
                return false;
            }
        }
        return true
    }
}
