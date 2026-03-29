class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const newStr = []
        for(let word of strs) {
            newStr.push(`${word.length}#${word}`)
        }
        return newStr.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#'){
                j++;
            }
            let length = parseInt(str.substring(i, j));

            const word = str.substring(j + 1, j + 1 + length);
            res.push(word);

            i = j + 1 + length;
        }
        return res
    }
}
