class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(1);
        let left_product = 1;                          
        for (let i = 0; i < nums.length; i++) {
                 output[i] = left_product;
                 left_product = left_product * nums[i]
        }   
        let right_product = 1; 
        for (let i = nums.length - 1; i >= 0 ; i--) {
                 output[i] = right_product * output[i]
                 right_product = right_product * nums[i]
        } 
        return output 
    }
}
