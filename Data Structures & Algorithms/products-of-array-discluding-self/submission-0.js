class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [1];

        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        let surfix = [1];

        for (let i = nums.length - 2; i >= 0; i--) {
            let val = surfix[surfix.length - 1] * nums[i + 1];
            surfix.push(val);
        }
        surfix.reverse();


        // 3. Combine them using Multiplication
        let ans = [];
        for (let i = 0; i < nums.length; i++) {
            // For any element 'i', its answer is prefix elements multiplied by suffix elements
            ans.push(prefix[i] * surfix[i]);
        }

        return ans;
    }
}
