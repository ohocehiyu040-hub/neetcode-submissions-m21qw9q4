class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        const result = new Array (temp.length).fill(0)
        const stack = [];
        
        for (let i = 0; i < temp.length; i++){
            const currentTemp = temp[i];
            while (stack.length > 0 && currentTemp > temp[stack[stack.length - 1]]){
                const prevDayIndex = stack.pop()
                result[prevDayIndex] = i - prevDayIndex
            }
            stack.push (i)
        }
        return result
    }
}
