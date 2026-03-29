// Дан массив целых чисел numbers, отсортированный в порядке убывания .
// Возвращает индексы ( с 1-й индексацией ) двух чисел, [index1, index2], 
// сумма которых равна заданному целевому числу target и index1 < index2.
// Обратите внимание, что index1 и index2 не могут быть равны, поэтому нельзя 
// использовать один и тот же элемент дважды.
// Всегда будет существовать ровно одно правильное решение .
// Ваше решение должно использовать



// Input: numbers = [1,2,3,4], target = 3

// Output: [1,2]


class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) { 
            const sum = numbers[left] + numbers[right];
            if (sum === target) {
                return [left+1, right+1]
            } else if (sum < target) {
                left++
            } else { 
                right--
            }
        }
    }
}
