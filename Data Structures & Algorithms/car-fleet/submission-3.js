class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        const cars = []
        for (let i = 0; i < position.length; i++) {
            cars.push ({pos: position[i], speed: speed[i]})
        }
        cars.sort((a,b) => b.pos - a.pos);
        for (let i = 0; i < cars.length; i++) {
            let car = cars[i];
            const currentTarget = (target - car.pos) / car.speed;
            if (stack.length > 0 && currentTarget <= stack[stack.length - 1]) {
                stack[stack.length - 1].push[currentTarget]
            } else {
                stack.push([currentTarget])
            }
        }
        return stack.length
    }
    
}



// Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]

// Output: 3