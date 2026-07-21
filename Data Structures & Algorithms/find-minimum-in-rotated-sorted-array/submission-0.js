class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Infinity;

        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let m = r - l;
            let mid_value = nums[m];

            if (min > mid_value) {
                min = mid_value;
            } else if (mid_value > min && mid_value < nums[m - 1] && nums[m+1]<mid_value) {

                l=m+1
            }
            else{
                r=m-1
            }
        }
        return min
    }
}
