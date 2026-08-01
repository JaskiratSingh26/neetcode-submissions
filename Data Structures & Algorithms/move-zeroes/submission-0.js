class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {

        let i = 0
        let j = i + 1

        while (j < nums.length) {
            if (nums[i] == 0 && nums[j] != 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                i++
                j++
            }
            else if( nums[i]!=0)  {
                i++
                if(j<=i) j=i+1
            }
            else j++
        }
    }
}
