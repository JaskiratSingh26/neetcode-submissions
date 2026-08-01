class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {


        let prefix = [1];
        for (let i = 1; i < nums.length; i++) {
            prefix.push(nums[i - 1] * prefix[i - 1]);
        }


        let suffix = new Array(nums.length).fill(1);
        for (let i = nums.length - 2; i >= 0; i--) {

            suffix[i] = nums[i + 1] * suffix[i + 1];
        }

        let ans = []
        for (let i = 0; i <suffix.length; i++) {
            ans.push(suffix[i] * prefix[i])
        }

        return ans
    }
}
