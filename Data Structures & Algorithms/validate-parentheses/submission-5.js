// Вам дана строка, sсостоящая из следующих символов: '(', ')', '{', '}', '['и ']'.

// Входная строка sдействительна тогда и только тогда, когда:

// Каждый открытый кронштейн закрывается кронштейном того же типа.
// Открытые скобки закрываются в правильном порядке.
// Каждой закрывающей скобке соответствует открывающая скобка того же типа.
// Возвращает true, true если s строка допустима, и false false в противном случае.


const collection = new Map ([
    ['[', ']'], 
    ['{', '}'], 
    ['(', ')']
])



class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(branches) {
        const stack = [];
        for (let br of branches) {
             if (collection.has(br)) {
                stack.push(br)
             } else {
                const lastOpen = stack.pop();
                if (collection.get(lastOpen) !== br){
                    return false
             }
            }
        }
        return stack.length === 0;
    }
}