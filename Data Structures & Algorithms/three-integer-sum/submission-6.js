class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let j;
        let k;
        let ans = [];
        let sum;

        for (let i = 0; i < nums.length-2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            j = i + 1;
            k = nums.length - 1;

            while (j < k) {
                sum = nums[i] + nums[j] + nums[k];

                if (sum < 0) j++;
                else if (sum > 0) k--;

                else if  (sum == 0) {
                    let arr = [nums[i], nums[j], nums[k]];
                    ans.push(arr);
                    j++;
                    k--;

                    while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
                }


                

            }
        }

        return ans;
    }
}
